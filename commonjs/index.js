'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createAsyncObjectWalker = require('./createAsyncObjectWalker');

var _createAsyncObjectWalker2 = _interopRequireDefault(_createAsyncObjectWalker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncObjectWalker = (0, _createAsyncObjectWalker2.default)({});

exports.default = {
  asyncObjectWalker: asyncObjectWalker,
  createAsyncObjectWalker: _createAsyncObjectWalker2.default
};