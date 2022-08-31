const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

// //create a new user 
router.post('/', userController.createUser, (req, res) => {
    return res.sendStatus(201); 
}); 

// // retrieve a specific user profile page to display
// //check cookies?
// router.get('/:user_id', 
// //add middleware here
// (req, res) => {return res.status(200)});

// // add information to a specific user's profile page 
// //remember to check cookies
// router.post('/:user_id',);

// // edit information on a specific user's profile page 
// //remember to check cookies
// router.put('/:user_id',);

// // delete a specific user
// // remember to check cookies
// router.delete('/:user_id');

// EXPORT THE ROUTER
module.exports = router;
//hello 
