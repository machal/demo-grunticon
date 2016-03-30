module.exports = function(grunt) {

  grunt.initConfig({
    grunticon: {
     icons: {
       files: [
         {
           expand: true,
           cwd: 'src/img/svg',
           src: ['*.svg'],
           dest: 'dist/grunticon'
        }   
       ], 
       options: {
         enhanceSVG: true,
         compressPNG: true,
         pngpath: '../png',         
         datasvgcss: 'css/icons.css',
         datapngcss: 'css/icons-png.css',
         urlpngcss: 'css/icons-png-bg.css'
       }       
     }
    }      
  });

  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('default', ['grunticon']);

};