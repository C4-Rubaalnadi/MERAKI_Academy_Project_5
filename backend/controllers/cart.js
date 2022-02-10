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
  const userId = req.params.id;
  const query = `SELECT * FROM cart INNER JOIN products ON products.id = cart.product_id  WHERE cart.user_id = ? AND cart.is_deleted =?`;
  const data = [userId,0];
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
  const query = `SELECT * FROM cart INNER JOIN products ON  cart.product_id = products.id INNER JOIN users ON cart.user_id = users.id`;
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "get cart success admin",
      result: results,
    });
  });
};

// update cart by id for user
const updateCartById = (req, res) => {
  const id = req.params.id;
  const product_id = req.params.product_id;
  const { quantity } = req.body;
  const user_id = req.body.user_id;
  const query = `UPDATE cart SET quantity=? WHERE product_id=? AND  user_id=? AND id =?`;

  const data = [quantity , product_id,user_id,id];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(202).json({
      success: true,
      message: "update cart",
      result: result,
      data: data,
    });
  });
};

// delete quantity from cart by id for user
const deleteCartById = (req, res) => {
  const id = req.params.id;
  const product_id = req.params.product_id;

  const query = `UPDATE cart SET is_deleted=?  WHERE product_id=? AND user_id=? `;

  const data = [1, product_id, id];

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: `The cart : ${id} is not found`,
      });
    } else {
      res.status(202).json({
        success: true,
        message: ` Succeeded to delete cart with id: ${id}`,
        results: result,
        id: id,
      });
    }
  });
};

module.exports = {
  createCart,
  getAllCartOfUser,
  getAllOrder,
  updateCartById,
  deleteCartById,
};
