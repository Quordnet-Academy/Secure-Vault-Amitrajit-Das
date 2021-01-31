"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _school_board = _interopRequireDefault(require("./Education/school_board.js"));

var _collegeJs = _interopRequireDefault(require("./Education/college,js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Education = _mongoose["default"].Schema({
  //Lvl 2
  individual_education: {
    school_boards: [_school_board["default"]],
    college: [_collegeJs["default"]]
  }
});

var individual_educations = _mongoose["default"].model("individual_education", individual_education);

var _default = individual_educations;
exports["default"] = _default;