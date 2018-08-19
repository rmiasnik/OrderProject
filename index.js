const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//Database Configuration
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



//ROUTES
//With increased complexity, look at routers Youtube video below
//https://www.youtube.com/watch?v=5yTazHkDR4o&index=2&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

const MenuItem = require('./models/MenuItem');

// @route   GET /
// @desc    Get all menu items
// @access  Public

app.get('/menu', (req, res) => {
    MenuItem.find()
        .then(menuItems => res.json(menuItems));
})

// @route   POST /
// @desc    Create a menu item
// @access  Public

app.post('/menu', (req, res) => {
    const newMenuItem = new MenuItem({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    })
    
    newMenuItem.save().then(item => res.json(item));
})

// @route   DELETE /
// @desc    Delete a menu item
// @access  Public

app.delete('/menu/:id', (req, res) => {
    MenuItem.findById(req.params.id)
        .then(item => item.remove(). then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));

});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on http://localhost:${port}/`));