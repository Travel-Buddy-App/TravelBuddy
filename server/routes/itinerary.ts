const express = require('express');

const router = express.Router();

// create a new itinerary 
// remember to check cookies
router.post('/',);

// retrieve a specific itinerary 
router.get('/:itinerary_id', );

// add an event to a specific itinerary
router.post('/:itinerary_id', );

// delete an itinerary
router.delete('/:itinerary_id', );

// replace an event in an itinerary 
router.put('/:itinerary_id', );

// EXPORT THE ROUTER
module.exports = router;