'use strict';

/* Cache buster…
 * @example
 * {{/path/to/image.jpg|bustcache}}
 */
module.exports = function(input) {
  return input + "?" + Date.now();
};
