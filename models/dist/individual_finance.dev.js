"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _asset = _interopRequireDefault(require("./Finance/asset.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var individual_finance = _mongoose["default"].Schema({
  //Level 2
  individual_finance: {
    itr_forms: String,
    bank_transaction: String,
    assets: [_asset["default"]],
    //Sub Parent
    pan_card: String
  }
});

var individual_finances = _mongoose["default"].model("individual_finance", individual_finance);

var _default = individual_finances;
exports["default"] = _default;