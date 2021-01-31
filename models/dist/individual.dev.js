"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _individual_detail = _interopRequireDefault(require("./individual_detail.js"));

var _individual_document = _interopRequireDefault(require("./individual_document.js"));

var _individual_education = _interopRequireDefault(require("./individual_education.js"));

var _individual_career = _interopRequireDefault(require("./individual_career.js"));

var _individual_finance = _interopRequireDefault(require("./individual_finance.js"));

var _individual_medical = _interopRequireDefault(require("./individual_medical.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var individual = _mongoose["default"].Schema({
  //Lvl 1
  individual: {
    individual_details: [_individual_detail["default"]],
    individual_documents: [_individual_document["default"]],
    individual_education: [_individual_education["default"]],
    individual_career: [_individual_career["default"]],
    individual_finance: [_individual_finance["default"]],
    individual_medical: [_individual_medical["default"]],
    Key: String
  }
});

var individuals = _mongoose["default"].model("individual", individual);

var _default = individuals;
exports["default"] = _default;