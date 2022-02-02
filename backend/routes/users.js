const express = require("express");
const userRouter = express.Router();
const { createNewUser,getAllUser,getUserById } = require("../controllers/users");
userRouter.post("/",createNewUser);
userRouter.get("/",getAllUser);
userRouter.get("/:id",getUserById);
module.exports = userRouter;
