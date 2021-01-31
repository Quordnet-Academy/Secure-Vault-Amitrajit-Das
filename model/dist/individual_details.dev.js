"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Individual_Detail = _mongoose["default"].Schema({
  Individual_Detail: {
    name: String,
    address: String,
    phn_no: String,
    email: String,
    key: String,
    dob: Date
  }
});

var Individual_Details = _mongoose["default"].model("Individual_Detail", Individual_Detail);

var _default = Individual_Details;
exports["default"] = _default;