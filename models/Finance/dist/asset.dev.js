"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var asset = _mongoose["default"].Schema({
  //Level 3
  asset: {
    commodities: String,
    cryptocurrencies: String,
    stocks: String,
    mutual_funds: String,
    ipos: String
  }
});

var assets = _mongoose["default"].model("asset", asset);

var _default = assets;
exports["default"] = _default;