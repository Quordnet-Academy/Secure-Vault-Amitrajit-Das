"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var record = _mongoose["default"].Schema({
  //Level 4
  record: {
    vaccine_name: Array,
    vaccine_date: Array,
    administered_by: Array,
    administered_at: Array
  }
});

var records = _mongoose["default"].model("record", record);

var _default = records;
exports["default"] = _default;