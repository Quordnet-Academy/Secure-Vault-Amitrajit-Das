"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var non_service = _mongoose["default"].Schema({
  //Lvl 3
  non_service: {
    freelancing: String,
    bussiness: String,
    non_profits: String
  }
});

var non_services = _mongoose["default"].model("non_service", non_service);

var _default = non_services;
exports["default"] = _default;