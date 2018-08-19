const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema

const MenuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = MenuItem = mongoose.model('menuItem', MenuItemSchema);