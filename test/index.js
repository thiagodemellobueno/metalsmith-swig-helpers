
var equal = require('assert-dir-equal'),
    swigHelpers = require('..'),
    Metalsmith = require('metalsmith'),
    templates = require('metalsmith-templates'),
    markdown = require('metalsmith-markdown'),
    rm = require('rimraf').sync;

describe('metalsmith-swig-helpers', function(){

  it('should register swig helpers', function(done){
    rm('test/fixtures/simple/build');
    var m = Metalsmith('test/fixtures/simple')
      .use(swigHelpers({}))
      .use(markdown({}))
      .use(templates({
        engine: 'swig',
        directory: 'templates'
      }));

    m.build(function(err){
      if (err) return done(err);
      equal('test/fixtures/simple/build', 'test/fixtures/simple/expected');
      done();
    });
  });

  it('should register dynamic swig helpers', function(done){
    rm('test/fixtures/dynamic/build');
    var m = Metalsmith('test/fixtures/dynamic')
      .use(swigHelpers({
        filters: {
          "xorcrypt": "xor-crypt"
        }
      }))
      .use(markdown({}))
      .use(templates({
        engine: 'swig',
        directory: 'templates'
      }));

    m.build(function(err){
      if (err) return done(err);
      equal('test/fixtures/dynamic/build', 'test/fixtures/dynamic/expected');
      done();
    });
  });

});
