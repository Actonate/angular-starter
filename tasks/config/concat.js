module.exports = function(grunt) {

  grunt.config.set('concat', {
    options: {
      stripBanners: true,
      separator: '',
    },
    css: {
      src: [
        '<%= config.bowerDir %>/angular-material/angular-material.min.css',
        '<%= config.bowerDir %>/angular-material-data-table/dist/md-data-table.min.css',
        '<%= config.bowerDir %>/animate.css/animate.min.css',
        '<%= config.bowerDir %>/pdf.js-viewer/viewer.css',
        '<%= config.assetsDir %>/css/style.min.css'
      ],
      dest: '<%= config.assetsDir %>/css/style.dist.css'
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-concat');
};
