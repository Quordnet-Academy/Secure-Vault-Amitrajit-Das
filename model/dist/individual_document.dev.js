"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var individual_document = _mongoose["default"].Schema({
  //Level 2
  individual_document: {
    adhaar_card_no: Int32Array,
    driver_license: String,
    pan_card: String,
    voter_card: String,
    passport: String
  }
});

var individual_documents = _mongoose["default"].model("individual_document", individual_document);

var _default = individual_documents;
exports["default"] = _default;