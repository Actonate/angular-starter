module.exports = function(grunt) {

  grunt.config.set('replace', {
    icons8: {
      files: {
        '<%= config.lessDir %>/build/icons.less': '<%= config.lessDir %>/templates/icons.build.less'
      },
      options: {
        patterns: [
          {
            match: new RegExp('icons8', 'g'),
            replacement: 'storedock'
          },
          {
            match: new RegExp('\\../fonts/', 'g'),
            replacement: '../<%= config.fontsFolder %>/icons/'
          }
        ]
      }
    }
  });

  // grunt.loadNpmTasks('grunt-replace');

};
