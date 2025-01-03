const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const router = require('./controller/router');

// Correctly invoke CORS middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const mongoURL = 'mongodb+srv://Smit093:Smit%40093@cluster0.wq3mn.mongodb.net/Ecomus?retryWrites=true&w=majority';
// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database
connectDB();

// Use the router
app.use(router);

// Start listening on port 3000
app.listen(3000, () => {
    console.log("App is listening Yeayyy !!!");
});
