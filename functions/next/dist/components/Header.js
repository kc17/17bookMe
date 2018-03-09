'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active' }, 'Home')), ' ', _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active' }, 'About')));
};