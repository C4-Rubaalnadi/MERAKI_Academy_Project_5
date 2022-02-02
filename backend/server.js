const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const db = require("./database/db");
//=======================================
const usersRouter = require("./routes/users"); //import users router
const loginRouter = require("./routes/login"); //import login router
const roleRouter = require("./routes/role"); //import role router
const productRouter = require("./routes/products"); //import products router
const permissionRouter = require("./routes/permission"); //import permission router
//========================================
app.use(express.json());
app.use(cors());
//========================================
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/roles", roleRouter);
app.use("/products", productRouter);
app.use("/permission",permissionRouter);
//=========================================



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
