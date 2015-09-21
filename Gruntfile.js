// JavaScript Document
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['bower_components/jquery/dist/jquery.js','bower_components/jquery.countdown/dist/jquery.plugin.js','bower_components/jquery.countdown/dist/jquery.countdown.js'],
        dest: 'js/jquery-plugins.min.js'
      }
    },
	sass: {
    dist: {
      files: {
        'css/style.css': 'sass/style.scss'
      }
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};