"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var finance = _mongoose["default"].Schema({
  //Lvl 4
  finance: {
    in_hand: String,
    ctc: String,
    salary_slips: String
  }
});

var finances = _mongoose["default"].model("finance", finance);

var _default = finances;
exports["default"] = _default;