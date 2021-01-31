"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _finance = _interopRequireDefault(require("./finance.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var career_instance = _mongoose["default"].Schema({
  //Lvl 3
  career_instances: {
    company_name: String,
    company_post: String,
    finance: [finances] //Child

  }
});

var career_instances = _mongoose["default"].model("career_instance", career_instance);

var _default = career_instances;
exports["default"] = _default;