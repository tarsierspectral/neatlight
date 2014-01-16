
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */


module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    concat: {
      dist: {
        src: [
          'bower_components/nprogress/nprogress.js',
          'assets/javascripts/*.js'
        ],
        dest: 'script.js'
      }
    },

    uglify: {
      dist: {
        src: '<%= concat.dist.src %>',
        dest: '<%= concat.dist.dest %>'
      }
    },

    stylus: {
      dist: {
        files: {
          'style.css': 'assets/stylesheets/*.styl'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'style.css': [
            'bower_components/nprogress/nprogress.css',
            'style.css'
          ]
        }
      }
    },

    watch: {
      dist: {
        files: 'assets/**/*',
        tasks: 'compile:min'
      }
    }

  });

  grunt.registerTask('compile', ['stylus', 'cssmin', 'concat']);
  grunt.registerTask('compile:min', ['stylus', 'cssmin', 'uglify']);
  grunt.registerTask('default', 'compile:min');

};