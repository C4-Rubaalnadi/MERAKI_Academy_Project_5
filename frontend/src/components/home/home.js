import "../home/home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsFillCartPlusFill, BsCartPlusFill } from "react-icons/bs";
import { IoIosAddCircle, IoMdRemoveCircleOutline } from "react-icons/io";
import { Chat } from "../chatbot";

//==============================================================================

const Home = ({ userInfo }) => {
  const [products, setProducts] = useState();

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all"); //set category from select
  const [productsCategory, setProductsCategory] = useState();
  const [numperOfProducts, setNumperOfProducts] = useState();
  const [quantity, setQuantity] = useState(0);
  const [user_id, setUser_id] = useState(userInfo.userId);

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const navigate = useNavigate();

  //========================================
  // pagination//get page products

  useEffect(() => {
    const getAllProductsPage = () => {
      axios
        .get(`http://localhost:5000/products/search?page=${page}`, {
          user_id: userInfo.userId,
        })
        .then((res) => {
          setProducts(res.data.result);
        })
        .catch((err) => {});
    };
    getAllProductsPage();
  }, [page]);

  //=============================================

  useEffect(() => {
    const getAllProducts = () => {
      axios
        .get("http://localhost:5000/products/")
        .then((res) => {
          setNumperOfProducts(res.data.result.length);
        })
        .catch((err) => {});
    };
    getAllProducts();
  }, []);

  //=========================================
  // get all products by category

  useEffect(() => {
    const getAllProductsCategory = () => {
      axios
        .get(`http://localhost:5000/products/search_2?type=${category}`)
        .then((res) => {
          setProductsCategory(res.data.result);
        })
        .catch((err) => {});
    };
    getAllProductsCategory();
  }, [category]);

  //========================================
  
  const handleAddToCart = (product_id) => {
    if (quantity > 0) {
      axios
        .post(
          "http://localhost:5000/orders/",
          { quantity, product_id, user_id },
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        )
        .then((res) => {
          setQuantity(0);
        })
        .catch((err) => {});
    }
  };

  //========================================

  return (
    <>
      <div className="divHome">
        <div className="homeNavBar">
          <div className="left">
            <h3>Category </h3>
            <div className="box">
              <select
                className="select"
                onChange={(e) => {
                  setCategory(`${e.target.value}`);
                }}
              >
                <option>all</option>
                <option>snake</option>
                <option>meat</option>
                <option>pasta</option>
                <option>millk_egg</option>
                <option>vegatables_frutes</option>
              </select>
            </div>
          </div>
          <div className="right">
            <BsFillCartPlusFill
              className="cart"
              onClick={() => {
                navigate("/cart");
              }}
            />
          </div>
        </div>
        <div className="pageContainer">
          <div className="sliderContainer">
            <div
              className="leftArrow"
              onClick={() => {
                page > 1
                  ? setPage((page) => page - 1)
                  : setPage((page) => Math.ceil(numperOfProducts / 8));
              }}
            >
              <FaAngleLeft />
            </div>
            <div className="divProduct">
              {category == "all"
                ? products &&
                  products.map((product, i) => {
                    return (
                      <>
                        <div className="productsContainer">
                          <div className="iconsContainer">
                            <div className="containerCartIcoon">
                              <div>{quantity}</div>
                              <IoMdRemoveCircleOutline
                                className="add"
                                onClick={() => {
                                  quantity !== 0
                                    ? setQuantity((previos) => previos - 1)
                                    : setQuantity(0);
                                }}
                              />
                              <BsCartPlusFill
                                key={i}
                                className="cartIcoon"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAddToCart(product.id);
                                }}
                              />
                              <IoIosAddCircle
                                className="add"
                                onClick={() => {
                                  setQuantity((previos) => previos + 1);
                                }}
                              />
                            </div>
                          </div>
                          <img
                            className="productImg"
                            src={product.image && product.image}
                          ></img>
                          <div>
                            <div className="productName">
                              {product.nameProduct && product.nameProduct}{" "}
                              <div className="price">
                                {product.price && product.price} JD
                              </div>
                            </div>
                            <br />
                            <div className="description">
                              {product.description && product.description}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                : productsCategory &&
                  productsCategory.map((product, i) => {
                    return (
                      <>
                        <div className="productsContainer">
                          <div className="iconsContainer">
                            <div className="containerCartIcoon">
                              <div>{quantity}</div>
                              <IoMdRemoveCircleOutline
                                className="add"
                                onClick={() => {
                                  quantity !== 0
                                    ? setQuantity((previos) => previos - 1)
                                    : setQuantity(0);
                                }}
                              />
                              <IoIosAddCircle
                                className="add"
                                onClick={() => {
                                  setQuantity((previos) => previos + 1);
                                }}
                              />
                              <BsCartPlusFill
                                key={i}
                                className="cartIcoon"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAddToCart(product.id);
                                }}
                              />
                            </div>
                          </div>
                          <img
                            className="productImg"
                            src={product.image && product.image}
                          ></img>
                          <div>
                            <div className="productName">
                              {product.nameProduct && product.nameProduct}{" "}
                              <div className="price">
                                {product.price && product.price} JOD
                              </div>
                            </div>
                            <div className="description">
                              {product.description && product.description}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
            </div>
            <div
              className="rightArrow"
              onClick={() => {
                page * 8 < numperOfProducts
                  ? setPage((page) => page + 1)
                  : setPage(1);
              }}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>

        <Chat />
      </div>
    </>
  );
};

export default Home;
