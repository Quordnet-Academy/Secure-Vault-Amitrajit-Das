"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _career_instance = _interopRequireDefault(require("./Career/career_instance.js"));

var _non_service_pursuits = _interopRequireDefault(require("./Career/non_service_pursuits.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var individual_career = _mongoose["default"].Schema({
  //Lvl 2  
  individual_career: {
    resume: String,
    career_instances: [_career_instance["default"]],
    //Sub Parent from career
    non_service_persuits: [_non_service_pursuits["default"]] //Sub Parent from career

  }
});

var individual_careers = _mongoose["default"].model("individual_career", individual_career);

var _default = individual_careers;
exports["default"] = _default;