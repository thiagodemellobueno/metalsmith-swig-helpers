/*
 * metalsmith-swig-helpers
*/

'use strict';

var swig = require("swig"),
    _str = require("underscore.string");

module.exports = function plugin( data ) {

    data = (('object' === typeof data)? data : undefined) || {};

    return function through (files, metalsmith, done) {

        swig.setFilter('slug', function(input){
          return _str.slugify(input);
        });

        done();
    };
}
