import "./products.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCloudPlusFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
import Cloudinary from "../../cloudinary/cloudinary";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cloudinary, setCloudinary] = useState(false);

  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/products/")
      .then((res) => {
        setProducts(res.data.result);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllProducts();
  });

  // -------------------------------------------------------------------

  const deleteProductById = (id) => {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((res) => {
        getAllProducts();
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="divContainerPro">
        <div className="divProPage">
          <div className="productPage">
            <BsCloudPlusFill
              className="cloud"
              onClick={() => {
                setCloudinary(true);
              }}
            />
            <h1>Products Page</h1>
          </div>
        </div>
        <div className="underLine"></div>
        <div className="divTable">
          {cloudinary ? (
            <div className="divCloudinary">
              <Cloudinary setCloudinary={setCloudinary}/>
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr className="thProduct">
                  <th className="thProduct">Product</th>
                  <th className="thProduct">Name</th>
                  <th className="thProduct">Description</th>
                  <th className="thPrice">Price</th>
                  <th className="thProduct">Type</th>
                  <th className="thAction">Actions</th>
                </tr>
              </thead>
              <tbody className="tdProduct">
                {products &&
                  products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            className="productImage"
                            src={product.image && product.image}
                          />
                        </td>
                        <td>{product.nameProduct && product.nameProduct}</td>
                        <td>{product.description && product.description}</td>
                        <td>{product.price && product.price} JD</td>
                        <td>{product.type && product.type}</td>
                        <td>
                          <BiEditAlt className="editIcon" />
                          <TiDelete
                            className="deleteIcon"
                            onClick={() => {
                              deleteProductById(product.id)
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
