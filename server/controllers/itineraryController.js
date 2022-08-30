const db = require('../models/userModel');
const axios = require('axios');

const itineraryController = {};

itineraryController.createItinerary = async function () {
  const { startDate, endDate, endLocation } = req.body;

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {query: endLocation, lang: 'en_US', units: 'mi'},
    headers: {
      'X-RapidAPI-Key': '88a962f2b1msh32504fbf5b60647p1ef904jsn5651f3ac222c',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    return next();
  }).catch(function (error) {
    console.error(error);
    return next(error);
  });

};