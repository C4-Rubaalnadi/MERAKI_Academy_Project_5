import React, { useEffect, useState } from "react";
import axios from "axios";
function FsvList(wishlist, userInfo) {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/FavortList/${userInfo.userId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  }, [wishlist]);
  return <div className="fav-list"></div>;
}

export default FsvList;
