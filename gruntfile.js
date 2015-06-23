module.exports = function(grunt) {

  var autoprefixer = require('autoprefixer-core');
  require('load-grunt-tasks')(grunt);

grunt.initConfig({
  postcss: {
    options: {
      map: true, // inline sourcemaps
      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer-core')({browsers: 'last 8 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: 'assets/css/*.css'
    }
  }
});

  grunt.registerTask('default', ['postcss:dist']);
};