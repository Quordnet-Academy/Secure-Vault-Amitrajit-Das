"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var school_board = _mongoose["default"].Schema({
  //Lvl 3
  school_board: {
    marks: String,
    grade: String,
    admit_card: String,
    registration_card: String,
    pass_certificate: String
  }
});

var school_boards = _mongoose["default"].model("school_board", school_board);

var _default = school_boards;
exports["default"] = _default;