const mongoose = require('mongoose');

// Define the schema for BestSeller
const bestSellerSchema = new mongoose.Schema({
    images: {
        type: Map,
        of: String, // Each key (color) maps to a string (image URL)
        required: true,
    },
    sizes: {
        type: [String],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // price should be a positive number
    },
    colors: {
        type: [String],
        required: true,
    },
}, { timestamps: true }); // adds createdAt and updatedAt fields

// Create the model from the schema
const BestSeller = mongoose.model('BestSeller', bestSellerSchema);

// Export the model
module.exports = BestSeller;
