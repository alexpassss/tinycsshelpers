module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
          files: [
              {outputstyle: '', expand: true, cwd: 'sources/stylesheets/base/', src: ['base.scss'], dest: 'lib/modules', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'sources/stylesheets/base/helpers', src: ['helpers.scss'], dest: 'lib/modules/helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'sources/stylesheets/base/typography', src: ['typography.scss'], dest: 'lib/modules/typography', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'sources/stylesheets/base/grids', src: ['grids.scss'], dest: 'lib/modules/grids', ext: '.css'}
          ]
      }
    },

    concat: {
      apps: {
          src: 'lib/modules/*.css',
          dest: 'lib/dist/tinycsshelpers.css'
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'lib/dist',
        src: ['*.css', '!*.min.css'],
        dest: 'lib/dist',
        ext: '.min.css'
      },
      release: {
        expand: true,
        cwd: 'lib/dist',
        src: ['*.css', '!*.min.css'],
        dest: 'lib/dist',
        ext: '.min.css'
      }
    },

    watch: {
      sass: {
          files: '**/*.scss',
          tasks: ['sass', 'concat', 'cssmin'],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [
    'sass',
    'concat',
    'cssmin:minify',
    'cssmin:release'
  ]);
  grunt.registerTask('reload', ['watch']);

};
