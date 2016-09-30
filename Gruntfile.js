/**
 * Grunt Task Runner
 *
 * This is simply to facilitate local development. To build any files, use the
 * according Metalsmith plugin.
 */

module.exports = function(grunt) {
  // Load all grunt plugins
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
  // Create the Grunt configuration
  var config = {
    // Load data from package.json
    pkg: grunt.file.readJSON('package.json'),
    // Linting config
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: [
        '*.js',
        'lib/*.js'
      ]
    },
    // Code standards config
    jscs: {
      options: {
        config: '.jscsrc'
      },
      files: [
        '*.js',
        'lib/*.js'
      ]
    },
  };
  // Initialize the configuration.
  grunt.initConfig(config);
  // Register tasks
  grunt.registerTask('default', []);
  grunt.registerTask('test', ['jshint', 'jscs']);
};
