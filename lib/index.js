"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("./bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index() {
  var test = (0, _bar.default)();
  console.log("".concat(test));
}

var _default = index;
exports.default = _default;