'use strict';
var chalk = require('chalk');

module.exports = function(_keyword) {
  return {
    expected: function(_expected) {
      return {
        actual: function(_actual) {
          var color;
          _keyword || (_keyword = _expected);
          if (process.env.NODE_ENV === 'production') return _keyword;
          color = _expected === _actual ? 'green' : 'red';
          return chalk[color](_keyword);
        }
      };
    }
  };
};
