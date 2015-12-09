module.exports = function(grunt) {

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),

	stylus: {
	  compile: {
	    files: {
	      'assets/css/app.min.css': ['assets/styl/*.styl']
	    }
	  }
	},

	concat: {
	    dist: {
	      src: ['app/**/*.js'],
	      dest: 'app.min.js'
	    }
	},

	watch: {
		styles: {
			files: 'assets/styl/**/*.styl',
			tasks: ['stylus']
		},
		scripts: {
			files: ['app/**/*.js'],
			tasks: ['concat'],
		}
	}

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'concat']);

};
