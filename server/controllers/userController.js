const db = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const userController = {};

userController.createUser = async (req, res, next) => {
  console.log("inside userController.createUser");
  
  try {
    const { username, password, email, profile_pic } = req.body;
    const hash = await bcrypt.hash(password, 10); 
        console.log("line 11 of userController.createUser");
        const queryParams = [username, hash, email, profile_pic];
        const postQuery = 'INSERT INTO users(username, password, email, profile_pic) VALUES ($1,$2,$3,$4);';
        console.log({queryParams}); 
        await db.query(postQuery, queryParams)
          .then(() => next())
          .catch((err) =>
            next({
              log: 'Cannot create user',
              status: 400,
              message: err,
            }),
          );
   } catch (err) {
    return next({
      log: 'Error occurred in userController.createUser',
      status: 400,
      message: err,
    });
  }
};

module.exports = userController;

// userController.createUser = async function (req, res, next) {
//   console.log('inside userController.createUser');
//   const { username, password, email, profile_pic } = req.body;
//   const hashedPS = bcrypt(password);
//   const queryParams = [username, password, email, profile_pic];
//   const postQuery =
//     'INSERT INTO user(username, password, email, profile_pic) VALUES ($1,$2,$3,$4)';
//   try {
//     await db.query(postquery, queryParams);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// };