import User from '../models/individual'

exports.home_get = (req, res) => {
    res.render('home get request');
}

exports.user_get = (req, res) => {
    res.render('user get request');
}

exports.home_post = (req, res) => {
    res.render('home post request');
}

exports.user_post = (req, res) => {
    res.render('user post request');
}

