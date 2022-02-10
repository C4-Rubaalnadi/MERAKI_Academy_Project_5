import axios from "axios";
import React, { useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import "../cloudinary/cloudinary.css";
const Cloudinary = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  

  //==============================================
  //cloudinary to upload images
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "images");
    data.append("cloud_name", "ds20iwzcn");
    fetch("  https://api.cloudinary.com/v1_1/ds20iwzcn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  //=====================================================
  const handleAddProduct = () => {
    axios
      .post(`http://localhost:5000/products/`, {
        image:url, nameProduct, description, price, type
      })
      .then((res) => {
        console.log(res.data);
        setPrice("");
        setNameProduct("");
        setDescription("");
        setType("");
        setShow(false);
        setUrl("")
      })
      .catch((err) => console.log(err));
  };

  //=====================================================
  return (
    <div className="AddContainer">
      <img className="addImg" src={url}></img>
      <div>
        <div>
          <MdOutlineAddAPhoto
            className="addImgIcons"
            onClick={() => {
              setShow(true);
            }}
          />
          {show ? (
            <div>
              <input
                className="typeFile"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <button onClick={uploadImage}>Upload</button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="addName">
          name :
          <input
            placeholder="name"
            value={nameProduct}
            onChange={(e) => {
              setNameProduct(e.target.value);
            }}
          ></input>{" "}
          <div className="addprice">
            price:{" "}
            <input
              placeholder="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <br />
        <div className="adddescription">
          description:{" "}
          <input
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="adddescription">
        Category :{" "}
        <input
          placeholder="category"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></input>
      </div>
      <button className="addButton" onClick={handleAddProduct}>
        Add products
      </button>
    </div>
  );
};
export default Cloudinary;
