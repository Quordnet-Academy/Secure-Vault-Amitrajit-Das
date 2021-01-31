"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var other_certificate = _mongoose["default"].Schema({
  //Lvl 4
  other_certificate: {
    Academy: String,
    Sports: Array,
    Events: Array
  }
});

var other_certificates = _mongoose["default"].model("other_certificate", other_certificate);

var _default = other_certificates;
exports["default"] = _default;