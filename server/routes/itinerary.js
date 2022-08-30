const express = require('express');

const itineraryController = require('../controllers/itineraryController');

const router = express.Router();

// create a new itinerary 
// remember to check cookies
router.post('/', itineraryController.createItinerary, (req, res) => {
    return res.status(201);
});

// retrieve a specific itinerary 
router.get('/:itinerary_id', );

// // add an event to a specific itinerary
// router.post('/:itinerary_id', );
// added to event router instead

// delete an itinerary
router.delete('/:itinerary_id', );

// // replace an event in an itinerary 
// router.put('/:itinerary_id', );
// added to event router instead

// EXPORT THE ROUTER
module.exports = router;