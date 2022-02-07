const express = require("express");
const cartRouter = express.Router();
const { createCart,getAllCartOfUser,getAllOrder, updateCartById, deleteCartById } = require("../controllers/cart");
const authentication = require("../middleware/authentication")
cartRouter.post("/",authentication ,createCart);
cartRouter.get("/:id",getAllCartOfUser);
cartRouter.get("/search",getAllOrder);
cartRouter.put("/update/:id/:product_id", updateCartById);
cartRouter.delete("/delete/:id/:product_id", deleteCartById);
module.exports = cartRouter;