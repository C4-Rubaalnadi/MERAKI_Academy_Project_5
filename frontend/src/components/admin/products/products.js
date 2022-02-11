import "./products.css"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
    <div className="divContainerPro">
    <div className="divProPage">
      <h1 className="productPage">Products Page</h1>
    </div>
    <div className="underLine"></div>
    <div className="divTable">
      <table>
        <thead>
          <tr className="thProduct">
            <th className="thProduct">Product</th>
            <th className="thProduct">Name</th>
            <th className="thProduct">Description</th>
            <th className="thPrice">Price</th>
            <th className="thProduct">Type</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default Products;
