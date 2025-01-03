const mongoose = require('mongoose');

// Define the schema for Marquee with only the text field
const marqueeSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true, // Ensure that text is required
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Marquee model
const Marquee = mongoose.model('Marquee', marqueeSchema);

// Export the model
module.exports = Marquee;
