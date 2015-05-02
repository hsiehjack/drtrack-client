module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "jade": {
      compile: {
        options: {
          data: {
            debug: false
          },
          pretty: true
        },
      files: [{
        src: '*.jade',
        dest: './www/partials',
        cwd: './jadePartials',
        expand: true,
        ext: '.html'
      }, {
        src: './evacuee/*.jade',
        dest: './www/partials',
        cwd: './jadePartials',
        expand: true,
        ext: '.html'
      }]
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['jade']);
};
