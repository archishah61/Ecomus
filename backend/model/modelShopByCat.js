const mongoose = require('mongoose');

// Define the ShopByCat schema
const shopByCatSchema = new mongoose.Schema({
    img: {
        type: String, // Assuming img is a URL or path to an image
        required: true // Making it a required field
    },
    caption: {
        type: String, // Caption for the image
        required: true // Making it a required field
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create the ShopByCat model
const ShopByCat = mongoose.model('ShopByCat', shopByCatSchema);

// Export the model
module.exports = ShopByCat;
