const connection = require("../database/db");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//role_id FK cannot add or update it manulally in table user
const createNewUser = async (req, res) => {
    const { firstName, lastName, country, email, password, image } = req.body;
  const hashPassword = await bcrypt.hash(password, 5);
  const query = `INSERT INTO users (firstName, lastName,  country, email, password, image) VALUES (?,?,?,?,?,?)`;
  const data = [firstName, lastName, country, email, hashPassword, image];
  console.log(data);
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "The email already exists",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "Success Author Added",
      results: results,
      data: data,
    });
  });
};
//get all user
//is_deleted=0 && put * ??
const getAllUser = (req, res) => {
  const query = `SELECT id FROM users `;
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "somthing err when gettin user id",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "Success getting user id",
      results: results,
    });
  });
};
//get user by id
//??
const getUserById = (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: `somthing err when gettin user by id --> ${userId}`,
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: `Success getting user by id --> ${userId}`,
      results: results,
    });
  });
};
module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
};
// module.exports = {
//   };