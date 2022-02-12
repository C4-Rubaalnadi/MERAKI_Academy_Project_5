import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as cocossd from "@tensorflow-models/coco-ssd";
export default function Image() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imageRef = useRef();
  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };
  const identify = async () => {
    const results = await model.classify(imageRef.current);
    console.log(results);
  };
  useEffect(() => {
    loadModel();
  }, []);
  if (isModelLoading) {
    return <h2>model loading..</h2>;
  }
  console.log(imageUrl);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        className="imageInput"
        onChange={uploadImage}
      />
      <img src={imageUrl} ref={imageRef} crossOrigin="anonymous" />
      {imageUrl && <button onClick={identify}>Identify</button>}
    </div>
  );
}
