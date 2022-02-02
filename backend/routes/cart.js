const express = require("express");
const cartRouter = express.Router();
const { createCart,getAllCartOfUser,getAllOrder } = require("../controllers/cart");
const authentication = require("../middleware/authentication")
cartRouter.post("/",authentication ,createCart);
cartRouter.get("/",getAllCartOfUser);
cartRouter.get("/search",getAllOrder);
module.exports = cartRouter;