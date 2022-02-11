import axios from "axios";
import React, { useEffect, useState } from "react";

import "../products/products.css";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      className="productImg"
                      src={product.image && product.image}
                    />
                  </td>
                  <td>{product.nameProduct && product.nameProduct}</td>
                  <td>{product.description && product.description}</td>
                  <td>{product.price && product.price}</td>
                  <td>{product.type && product.type}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
