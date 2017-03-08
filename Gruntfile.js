module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: grunt.file.readJSON('jshint.json'),
    lint: {
      backend: ['./*js', 'routes/*.js', 'app/**/*.js'],
      frontend: ['public/js/**/*.js']
    },
    watch: {
      files: ['<%= lint.backend %>', '<%= lint.frontend %>'],
      tasks: 'default'
    },
    jsbeautifier: {
      files: '<%= watch.files %>',
      options: {
        js: {
          "indentSize": 2,
          "indentChar": " ",
          "indentLevel": 0,
          "indentWithTabs": false,
          "preserveNewlines": true,
          "maxPreserveNewlines": 3,
          "jslintHappy": false,
          "braceStyle": "collapse",
          "keepArrayIndentation": false,
          "keepFunctionIndentation": false,
          "spaceBeforeConditional": true,
          "evalCode": false,
          "indentCase": false,
          "unescapeStrings": false
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    sass: {
      compile: {
        files: [{
          expand: true, // Enable dynamic expansion
          cwd: 'public/sass', // src marches are relative to this path
          src: ['**/*.scss', '!**/_*.scss'], // Actual patterns to match
          dest: 'public/css', // Destination path prefix
          ext: '.css' // Destination filepaths will have this extension
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('test', ['karma:unit']);
  grunt.registerTask('compile', ['sass:compile']);
  grunt.registerTask('default', ['jsbeautifier', 'jshint:*', 'compile', 'test']);

};
