var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../config');
	

/**
 * Run all tasks needed for a build in defined order
 */

gulp.task('build', function() {
  runSequence(
  	'delete-D',
  	['data-D','images-D'],
  	['scripts-D','sass-D'],
  	'html-D',
  	'inject-D',
  	'watch-D',
  	'serve-D'
  	);
  });
  
 gulp.task('qa', function() {
  runSequence(
  	'delete-D',
  	['data-D','images-D','transpile-D'],
  	['scripts-D--transpiled','sass-D'],
  	'html-D',
  	'inject-D',
  	'serve-D'
  	);
  });
  
  gulp.task('publish', function() {
  runSequence(
  	'delete-P',
  	['data-P','images-P','transpile-P'],
  	['scripts-P','sass-P'],
  	'html-P',
  	'inject-P',
  	'serve-P'
  	);
  });
  
