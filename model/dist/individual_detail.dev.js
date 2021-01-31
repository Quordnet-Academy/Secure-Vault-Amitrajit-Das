"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var individual_detail = _mongoose["default"].Schema({
  individual_detail: {
    name: String,
    address: String,
    phn_no: String,
    email: String,
    key: String,
    dob: Date
  }
});

var individual_details = _mongoose["default"].model("individual_detail", individual_detail);

var _default = individual_details;
exports["default"] = _default;