'use strict'

var ngrok = require('ngrok');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminAdvpng = require('imagemin-advpng');

module.exports = grunt => {
	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 90
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    },

		// Minify all the JS files
		uglify: {
			dist: {
		    options: {
		      mangle: false
		    },
	      files: [{
					expand: true,
					cwd: 'src',
					src: ['js/*.js', 'views/js/*.js'],
	        dest: 'dist'
	      }]
			}
  	},

		// Minify all the CSS files
		cssmin: {
		  dist: {
		    files: [{
		      expand: true,
		      cwd: 'src',
		      src: ['css/*.css', 'views/css/*.css'],
		      dest: 'dist'
		    }]
		  }
		},

		// Minify all the HTML files
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['*.html', 'views/*.html'],
					dest: 'dist'
				}]
			}
		},

		responsive_images: {
			dist: {
		    options: {
		      engine: 'im',
					sizes: [
						{width: 100},
						{width: 200},
						{width: 360},
						{width: 460},
						{width: 720},
						{width: 920},
						{width: 1400}
					]
		    },
		    files: [{
					expand: true,
					cwd: 'src',
					src: ['views/images/pizzeria.jpg'],
					dest: 'dist'
		    }]
  	  }
		},

		// Optimize images
		imagemin: {
			dynamic: {
				options: {
					use: [imageminJpegRecompress({target:0.98}), imageminAdvpng({})],
					optimizationlevel: 5
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist'
				}]
			}
		}
  });

  // Register task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8080;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  // Register default tasks
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'responsive_images', 'imagemin', 'psi-ngrok']);
};
