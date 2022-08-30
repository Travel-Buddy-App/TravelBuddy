const express = require('express'); 
const path = require('path');

//require in our controllers 
const {userController} = require('./controllers/userController.js');

const app = express(); 

const PORT = 3000; 

const userRouter = require('./routes/user.ts');
const itineraryRouter = require('./routes/itinerary.ts');

// need to determine how we are parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static file
app.use('/', express.static(path.join(__dirname, '../index.html'))); 

//serve static css file 
app.use('/', express.static(path.join(__dirname, '../src/styles.css')));

//serve static tsx file 
app.use('/', express.static(path.join(__dirname, '../src/index.tsx')));

// user router
app.use('/user', userRouter);

// itinerary router
app.post('/user/:user_id/itinerary', itineraryRouter);

// 404 Error handler 
app.use((req, res) => {
    return res.sendStatus(404);
}); 

// global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error', 
        status: 500, 
        message: { err: 'An error occurred'},
    }; 
    const errorObj = Object.assign(defaultErr, err); 
    console.log(errorObj.log);

    return res.status(errorObj.status).json(errorObj.message); 
}); 

// start server
app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`); 
}); 

module.exports = app; 
