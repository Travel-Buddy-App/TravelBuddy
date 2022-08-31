const db = require('../models/userModel');
const axios = require('axios');

const itineraryController = {};

itineraryController.getAll = async function (req, res, next) {
  const { startDate, endDate, endLocation } = req.body;
  console.log('createItinerary is running');

  // retrieving location ID associated with user-inputted location
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: { query: endLocation, lang: 'en_US', units: 'mi' },
    headers: {
      'X-RapidAPI-Key': '88a962f2b1msh32504fbf5b60647p1ef904jsn5651f3ac222c',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(
        'locationId',
        response.data.data.Typeahead_autocomplete.results[0].detailsV2
          .locationId
      );
      const locationId =
        response.data.data.Typeahead_autocomplete.results[0].detailsV2
          .locationId;

      // second call to get names of restaurants, rating, address, cuisine list
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
        params: {
          location_id: locationId,
          // restaurant_tagcategory: '10591',
          // restaurant_tagcategory_standalone: '10591',
          currency: 'USD',
          lunit: 'km',
          limit: '30',
          open_now: 'false', // false = return restaurants even if they're not open right now
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            '88a962f2b1msh32504fbf5b60647p1ef904jsn5651f3ac222c',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data[0]);
          // console.log(response.data["0"]);
          //console.log(response.data.data[0]["name"]);
          const result = [];
          let restaurantName;
          let restaurantAddress;
          let restaurantPics;
          let restaurantCuisine;

          // only store the first 10 restaurants
          for (let i = 0; i <= 10; i++) {
            restaurantName = response.data.data[i]['name'];
            restaurantAddress = response.data.data[i]['address_obj'];
            restaurantCuisine = response.data.data[i]['cuisine'];
            restaurantPics = response.data.data[i]['photo'];
            result.push({
              restaurantName: restaurantName,
              restaurantAddress: restaurantAddress,
              restaurantCuisine: restaurantCuisine,
              restaurantPics: restaurantPics,
            });
          }
          res.locals.restaurants = result;
          //console.log(res.locals.restaurants);

          const axios = require('axios');

          // third call for hotel options
          const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
            params: {
              location_id: locationId,
              adults: '1',
              rooms: '1',
              nights: '2',
              offset: '0',
              currency: 'USD',
              order: 'asc',
              limit: '30',
              sort: 'recommended',
              lang: 'en_US',
            },
            headers: {
              'X-RapidAPI-Key':
                '88a962f2b1msh32504fbf5b60647p1ef904jsn5651f3ac222c',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            },
          };

          // third call to get hotels
          axios
            .request(options)
            .then(function (response) {
              const result = [];
              let hotelName;
              let hotelPics;
              let hotelPrice;

              // only store the first 10 hotels
              for (let i = 0; i <= 10; i++) {
                hotelName = response.data.data[i]['name'];
                hotelPrice = response.data.data[i]['price'];
                hotelPics = response.data.data[i]['photo'];
                result.push({
                  hotelName: hotelName,
                  hotelPrice: hotelPrice,
                  hotelPics: hotelPics,
                });
              }
              res.locals.hotels = result;
              //console.log(res.locals.hotels);

              // options for fourth call for attractions
              const options = {
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
                params: {
                  location_id: locationId,
                  currency: 'USD',
                  lang: 'en_US',
                  lunit: 'km',
                  sort: 'recommended',
                },
                headers: {
                  'X-RapidAPI-Key':
                    '88a962f2b1msh32504fbf5b60647p1ef904jsn5651f3ac222c',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                },
              };
              // fourth call for attractions
              axios
                .request(options)
                .then(function (response) {
                  // console.log(response.data);
                  
              const result = [];
              let attractionName;
              let attractionPics;
              let attractionAddress;

              // only store the first 10 attractions
              for (let i = 0; i <= 10; i++) {
                attractionName = response.data.data[i]['name'];
                attractionAddress = response.data.data['address_object'];
                attractionPics = response.data.data[i]['photo'];
                result.push({
                  attractionName: attractionName,
                  attractionAddress: attractionAddress,
                  attractionPics: attractionPics,
                });
              }
              res.locals.attractions = result;
              //console.log(res.locals.attractions);
              return next();
              
                })
                .catch(function (error) {
                  console.error(error);
                });

            })
            .catch(function (error) {
              console.error(error);
            });
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error(error);
      return next(error);
    });
};

module.exports = itineraryController;
