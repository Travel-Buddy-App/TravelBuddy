const db = require('../models/userModel');
const bcrypt = require('bcript');

const userController = {};

userController.createUser = async function () {
  const { username, password, email, profile_pic } = req.body;
  const hashedPS = bcrypt(password);
  const queryParams = [username, password, email, profile_pic];
  const postQuery =
    'INSERT INTO user(username, password, email, profile_pic) VALUES ($1,$2,$3,$4)';
  try {
  await db.query(postquery, queryParams);
  return next();
  } catch (err) {
    return next(err);
  }
};
