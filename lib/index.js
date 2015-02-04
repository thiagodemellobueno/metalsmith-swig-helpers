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

        swig.setFilter('slug', function(input){
          return _str.slugify(input).toLowerCase();
        });

        swig.setFilter('isSlugMatch', function(input,compareTo) {
          return (_str.slugify(input).toLowerCase() == _str.slugify(compareTo).toLowerCase());
        });

        done();
    };
}
