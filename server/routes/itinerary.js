const express = require('express');

const itineraryController = require('../controllers/itineraryController.js');

const router = express.Router();

// create a new itinerary
// remember to check cookies
router.post('/', itineraryController.getAll, (req, res) => {
    //console.log(res.locals.restaurants);
    //console.log(res.locals.hotels);
    //console.log(res.locals.attractions);
  return res.status(201).json({restaurants: res.locals.restaurants, hotels: res.locals.hotels, attractions: res.locals.attractions});
});

// router.post('/attractions', (req, res) => {
//     console.log("res.locals.attractions inside router", res.locals.attractions);
//     return res.sendStatus(201);

// })

// router.post('/hotels', (req, res) => {
//     console.log("res.locals.hotels inside router", res.locals.hotels);
//     return res.sendStatus(201);
// })

// router.post('/restaurants', (req, res) => {
//     console.log("res.locals.restaurants inside router", res.locals.restaurants);
//     return res.sendStatus(201);
// })

// // // retrieve a specific itinerary
// // router.get('/:itinerary_id', );

// // // // add an event to a specific itinerary
// // // router.post('/:itinerary_id', );
// // // added to event router instead

// // // delete an itinerary
// // router.delete('/:itinerary_id', );

// // // // replace an event in an itinerary
// // // router.put('/:itinerary_id', );
// // // added to event router instead

// EXPORT THE ROUTER
module.exports = router;
