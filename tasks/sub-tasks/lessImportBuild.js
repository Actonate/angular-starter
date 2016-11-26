module.exports = function (grunt) {
  grunt.registerTask('lessImportBuild', [
    'preprocess:less', 'replace:icons8'
  ]);
};
