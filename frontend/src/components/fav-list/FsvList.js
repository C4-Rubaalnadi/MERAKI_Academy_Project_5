import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiBrokenHeart } from "react-icons/gi";
import "./FsvList.css";
function FsvList(wishlist, userInfo) {
  const [fav, setFav] = useState();
  const getFav = () => {
    axios
      .get(`http://localhost:5000/orders/FavortList/${userInfo.userId}`)
      .then((res) => {
        setFav(res.data.result);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getFav();
  }, []);
  return (
    <div className="divProduct">
      {fav &&
        fav.map((wish, i) => {
          return (
            <>
              <div className="productsContainer">
                <img
                  className="productImg"
                  src={wish.image && wish.image}
                ></img>
                <GiBrokenHeart
                  className="delete-fav"
                  onClick={() => {
                    axios
                      .delete(
                        `http://localhost:5000/orders/deleteFavortList/${wish.id}`
                      )
                      .then((res) => {
                        getFav();
                      })
                      .catch((err) => {});
                  }}
                />
                <div>
                  <div className="productName">
                    {wish.nameProduct && wish.nameProduct}{" "}
                    <div className="price">{wish.wish && wish.price} JD</div>
                  </div>
                  <br />
                  <div className="description">
                    {wish.description && wish.description}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default FsvList;
