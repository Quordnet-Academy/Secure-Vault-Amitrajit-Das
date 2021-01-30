const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// express

const app = express();

// server port
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);
 

// mongodb connection


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("connection error:", err);
    } else {
        console.log("MongoDB connection successful");
    }
});


