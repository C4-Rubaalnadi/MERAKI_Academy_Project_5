const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("../backend/database/db.js");
//=======================================
const usersRouter = require("./routes/users"); //import users router
const loginRouter = require("./routes/login"); //import login router
const roleRouter = require("./routes/role"); //import role router
const productRouter = require("./routes/products"); //import products router
app.use(cors());

app.use(express.json());
//========================================
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/roles", roleRouter);
app.use("/products", productRouter);

//=========================================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
