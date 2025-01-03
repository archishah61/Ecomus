const mongoose = require('mongoose');

// Define the Hero schema
const heroSchema = new mongoose.Schema({
    img: {
        type: String, // Assuming img is a URL or path to an image
        required: true // Making it a required field
    },
    title: {
        type: String, // Title of the hero
        required: true // Making it a required field
    },
    subtitle: {
        type: String, // Subtitle of the hero
        required: false // Making it optional
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create the Hero model
const Hero = mongoose.model('Hero', heroSchema);

// Export the model
module.exports = Hero;
