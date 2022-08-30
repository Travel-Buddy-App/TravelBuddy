const { Pool } = require('pg');

const URI =
  'postgres://jaaqnhbv:wN46vUmnR5JSQMnJhxEjkNAnx7vckDxv@rosie.db.elephantsql.com/jaaqnhbv';

const pool = new Pool({
  connectionString: URI,
});

/* CREATE TABLE users(
user_id SERIAL PRIMARY KEY, 
username VARCHAR(50), 
password VARCHAR(50),
email VARCHAR(50), 
profile_pic bytea
); */

/*  CREATE TABLE itinerary(
  ID SERIAL PRIMARY KEY,
  user_id INT,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id) 
     REFERENCES users(user_id)
      ON DELETE CASCADE,
  start_date VARCHAR(50),
  end_date VARCHAR(50),
  departure_time VARCHAR(50),
  arrival_time VARCHAR(50),
  start_location VARCHAR(50),
  end_location VARCHAR(50),
  event_restaurants VARCHAR[],
  event_attractions VARCHAR[],
  event_hotels VARCHAR[]
  ); */

// user table: user_id, username, password, email, profile_pic, friends_list?
// itinerary table:  ID, user_id, start_date, end_date, departure_time, arrival_time, start_location, end_location, event_resturents, event_attractions, event_hotels

module.exports = {
  query: (text, params, callback) => {
    console.log('Ran query: ', text);
    return pool.query(text, params, callback);
  },
};
