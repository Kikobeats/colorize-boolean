'use strict';
var chalk = require('chalk');

module.exports = function(keyword) {
  return {
    expected: function(expected) {
      return {
        actual: function(actual) {
          var color;
          var value;

          if (expected === actual) {
            value = expected;
            color = 'green';
          } else {
            value = actual;
            color = 'red';
          }

          value = keyword || value;

          if (process.env.NODE_ENV === 'production') return value;
          return chalk[color](value);
        }
      };
    }
  };
};
