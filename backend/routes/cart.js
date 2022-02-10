const express = require("express");

const cartRouter = express.Router();


const {
  createCart,
  getAllCartOfUser,
  getAllOrder,
  updateCartById,
  deleteCartById,
  Add_wishList,
  getAllFavortListOfUser
} = require("../controllers/cart");
const authentication = require("../middleware/authentication");

cartRouter.post("/", authentication, createCart);
cartRouter.get("/:id", getAllCartOfUser);
cartRouter.get("/search/cart", getAllOrder);
cartRouter.put("/edit/:id/", updateCartById);
cartRouter.delete("/delete/:id/:product_id", deleteCartById);
cartRouter.post("/add_wishList",Add_wishList);
cartRouter.get("/FavortList/:idUser",getAllFavortListOfUser)
module.exports = cartRouter;
