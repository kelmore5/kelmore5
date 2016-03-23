module.exports = function(grunt) { 
	grunt.loadNpmTasks('grunt-bootlint');
	//grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),
	bootlint: {
	    options: {
	      relaxerror: [],
	      showallerrors: false,
	      stoponerror: false,
	      stoponwarning: false
	    },
	    files: ['*.html']
	  } });
}
