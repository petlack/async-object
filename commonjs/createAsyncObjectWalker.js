"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var asyncObjectWalker = function asyncObjectWalker() {
  return function (x) {
    return x;
  };
};

exports.default = function (config) {
  return asyncObjectWalker(config);
};