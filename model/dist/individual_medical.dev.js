"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _vaccination_record = _interopRequireDefault(require("./Medical/vaccination_record.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Individual_Medical = _mongoose["default"].Schema({
  //Level 2
  Individual_Medical: {
    vaccination_records: [_vaccination_record["default"]],
    //Sub parent
    medical_illness_long_term: String
  }
});

var Individual_Medicals = _mongoose["default"].model("Individual_Medical", Individual_Medical);

var _default = Individual_Medicals;
exports["default"] = _default;