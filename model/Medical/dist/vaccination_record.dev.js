"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _record = _interopRequireDefault(require("./record.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vaccination_record = _mongoose["default"].Schema({
  //Level 3
  vaccination_record: {
    records: [_record["default"]] //child

  }
});

var vaccination_records = _mongoose["default"].model("vaccine", vaccine);

var _default = vaccination_records;
exports["default"] = _default;