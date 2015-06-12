/*
 * metalsmith-swig-helpers
*/

'use strict';

var swig = require("swig"),
    _str = require("underscore.string"),
    debug = require("debug")("metalsmith-swig-helpers");

module.exports = function plugin( data ) {

    data = (('object' === typeof data)? data : undefined) || {};

    return function through (files, metalsmith, done) {

        /* Slugifies the input using underscore.string
         * @example
         * {{varName|slug}}
         */
         swig.setFilter('slug', function(input){
          return _str.slugify(input).toLowerCase();
        });

        /* When slugified and lowercased does input match the slugified and lowercased compareTo?
         * @example
         * {% set navItemIsActivePage = navItem.name|isSlugMatch(title) %}
         * {% if navItemIsActivePage == true %}
         *  <li class="active">…</li>
         * {% else %}
         *  <li>…</li>
         */
        swig.setFilter('isSlugMatch', function(input,compareTo) {
          return (_str.slugify(input).toLowerCase() == _str.slugify(compareTo).toLowerCase());
        });

        /* Take the input and provides a truncated version…
         * @example
         * {{varName|limit}} or {{varName|limit(120)}}
         */
        swig.setFilter('limit', function(input,limit) {

          var input, output;

          input = String ( input );
          if(!limit) limit = 140;

          if( input.length < limit ) return input;

          if( input.lastIndexOf( ' ' ) > 0 ) {
            output = input.substr( 0, input.lastIndexOf( ' ', limit ) ) + '…';
          } else {
            output = input.substr( 0, -1 ) + '…';
          }

          return output;

        });

        /* Cache buster…
         * @example
         * {{/path/to/image.jpg|bustcache}}
         */
         swig.setFilter('bustcache', function(input) {
           return input + "?" + Date.now();
         });

        // Dynamic Filters
        // Take an array of functions or strings.
        for (var name in data.filters || {}) {
          var filter = null;
          switch (typeof data.filters[name]) {
            case "string":
              filter = require(data.filters[name]);
              break;
            case "function":
            default:
              filter = data.filters[name];
              break;
          }
          swig.setFilter(name, filter);
        }


        done();

    };
}
