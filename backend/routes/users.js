const express = require("express");
const userRouter = express.Router();
const { createNewUser,getAllUser,getUserById,updateInfo,deleteUser } = require("../controllers/users");
userRouter.post("/",createNewUser);
userRouter.get("/",getAllUser);
userRouter.get("/:id",getUserById);
userRouter.patch("/update/:id",updateInfo)
userRouter.delete("/:id",deleteUser)
module.exports = userRouter;
