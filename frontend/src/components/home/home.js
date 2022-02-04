import "../home/home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { FaAngleLeft, FaAngleRight, BsCart4 } from "react-icons/fa";
import { BsFillCartPlusFill ,BsCartPlusFill} from "react-icons/bs";
/////////////
//==============================================================================

const Home = () => {
  const [products, setProducts] = useState();

  const [page, setPage] = useState(4);
  const [category, setCategory] = useState("all"); //set category from select
  const dispatch = useDispatch();
  const [productsCategory, setProductsCategory] = useState();
  const [numperOfProducts,setNumperOfProducts]=useState()
  console.log(numperOfProducts);
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
console.log(page);
  const navigate = useNavigate();

  //========================================
  // pagination//get page products
  useEffect(() => {
    const getAllProductsPage = () => {
      axios
        .get(`http://localhost:5000/products/search?page=${page}`)
        .then((res) => {
          setProducts(res.data.result);
          console.log(products);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllProductsPage();
  }, [page]);
  //=============================================
useEffect(()=>{
const getAllProducts=()=>{
    axios.get("http://localhost:5000/products/").then((res) => {
        
        setNumperOfProducts(res.data.result.length)
      })
      .catch((err) => {
        console.log(err);
      });
}
getAllProducts()
},[])
  //=========================================
  // get all products by category
  useEffect(() => {
    const getAllProductsCategory = () => {
      axios
        .get(`http://localhost:5000/products/search_2?type=${category}`)
        .then((res) => {
          setProductsCategory(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllProductsCategory();
  }, [category]);
  //========================================
//   const handleAddToCart=()=>{
//       axios.post()
//   }
  //========================================

  return (
    <>
      <div className="">
        <div className="homeNavBar">
          <div className="left">
            <h3>category </h3>
            <select
              onChange={(e) => {
                setCategory(`${e.target.value}`);
                console.log(e.target.value);
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
          <div className="mid">
            <div>
              <h1 className="logo">gebnalk</h1>
            </div>
          </div>
          <div className="right">
            <BsFillCartPlusFill className="cart" />
          </div>
        </div>
        <div className="pageComtainer">
          <div className="sliderContainer">
            <div className="leftArrow" onClick={()=>{page>1?
                  setPage((page)=>page-1):setPage((page)=>numperOfProducts/4)
              }}>
              <FaAngleLeft  />
            </div>
            {category == "all"
              ? products &&
                products.map((product) => {
                  return (
                    <>
                      <div className="productsContainer">
                          <div className="iconsContainer"><div className="containerCartIcoon"><BsCartPlusFill className="cartIcoon" onClick={handleAddToCart}/></div></div>
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
                })
              : productsCategory &&
                productsCategory.map((product) => {
                  return (
                    <>
                      <div className="productsContainer">
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

            <div className="rightArrow" onClick={()=>{page*4<numperOfProducts?
                  setPage((page)=>page+1):setPage(1)
              }}>
              <FaAngleRight  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
