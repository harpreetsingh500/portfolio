module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "public/javascripts/all.js": ["public/javascripts/all.js"]
        }
      }
    },
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["bower_components/jquery/dist/jquery.js", "public/javascripts/app.js"],
        dest: "public/javascripts/all.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("default", ["concat", "uglify"]);
};
