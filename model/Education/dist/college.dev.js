"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _other_certificate = _interopRequireDefault(require("./other_certificate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var college = _mongoose["default"].Schema({
  //Lvl 3
  college: {
    degree: String,
    course: String,
    discipline: String,
    semester_sheets: String,
    final_year_projects: String,
    degree_certificate: String,
    other_certificates: [_other_certificate["default"]]
  }
});

var colleges = _mongoose["default"].model("college", college);

var _default = colleges;
exports["default"] = _default;