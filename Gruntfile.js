module.exports = function (grunt) {
// Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'src/js/ES5/unity-endscreen.min.js': ['src/js/ES5/unity-endscreen.js'],
        },
      },
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'src/css/unity-endscreen.min.css': ['src/css/unity-endscreen.css'],
        },
      },
    },
  });
// Load plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
