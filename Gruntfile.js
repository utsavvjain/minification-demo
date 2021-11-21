module.exports = function(grunt) {
    grunt.initConfig({
      cssmin : {
        core: {
          files: [{
            expand: true,
            cwd: 'src/main/resources',
            src: 'static/css/**/*.css',
            dest: "target/classes",
            ext: '.css'
          },
          {
            expand: true,
            cwd: 'src/main/resources',
            src: 'static/thres/css/**/*.css',
            dest: "target/classes",
            ext: '.css'
          }]
        }
      },
      uglify: {
        core: {
          files: [{
            expand: true,
            cwd: 'src/main/resources',
            src: 'static/js/**/*.js',
            dest: "target/classes",
            ext: '.js'
          },
          {
            expand: true,
            cwd: 'src/main/resources',
            src: 'static/thres/js/**/*.js',
            dest: "target/classes",
            ext: '.js'
          }]
        }        
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify','cssmin']);
  };