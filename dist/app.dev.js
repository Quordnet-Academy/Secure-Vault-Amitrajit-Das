"use strict";

var express = require('express');

var morgan = require('morgan');

var mongoose = require('mongoose');

var dotenv = require('dotenv').config(); // express


var app = express(); // mongodb connection

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log("connection error:", err);
  } else {
    console.log("MongoDB connection successful");
  }
}); //setting up view engine

app.set('view engine', 'ejs'); // middleware & static files

app.use(express["static"]('public'));
app.use(morgan('dev'));
app.use(function (req, res, next) {
  res.locals.path = req.path;
  next();
});