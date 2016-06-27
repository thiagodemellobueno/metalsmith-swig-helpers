'use strict';

var _str = require("underscore.string");

/* Slugifies the input using underscore.string
 * @example
 * {{varName|slug}}
 */
module.exports = function (input) {
  return _str.slugify(input).toLowerCase();
};
