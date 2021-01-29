const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// express

const app = express();

// mongodb connection


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("connection error:", err);
    } else {
        console.log("MongoDB connection successful");
    }
});
 
