const connection = require("../database/db");

//creat new order in cart
const createCart = (req, res) => {
  const { quantity, product_id, user_id } = req.body;
  const query = `INSERT INTO cart (quantity , product_id , user_id ) VALUES (?,?,?)`;
  const data = [quantity, product_id, user_id];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: " cart created",
      result: results,
      data: data,
    });
  });
};
// getAllCartOfUser
const getAllCartOfUser = (req, res) => {
  //   const query = `SELECT image,nameProduct,price FROM product LEFT JOIN cart ON product.id = cart.product_id`;
  const userId = req.body.id;
  const query = `SELECT * FROM cart LEFT JOIN products ON products.id = cart.product_id  WHERE cart.user_id = ?`;
  const data = [userId];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "get cart success ",
      result: results,
    });
  });
};
//admin
const getAllOrder = (req, res) => {
  const query = `SELECT * FROM cart LEFT JOIN products ON  cart.product_id = products.id INNER JOIN users ON cart.user_id = users.id `;
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "get cart success ",
      result: results,
    });
  });
};
module.exports = {
  createCart,
  getAllCartOfUser,
  getAllOrder,
};
