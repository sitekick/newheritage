var gulp 			= require('gulp'),
	runSequence		= require('run-sequence'),
	config 			= require('../../config');
	

/**
 * Run all tasks needed for a build in defined order
 */

gulp.task('build', function() {
  runSequence(
  	['data','images'],
  	['scripts','sass'],
  	'watch',
  	'serve'
  	);
 });

/* Testing runs scripts through babel before concat; no watching*/
gulp.task('test', function() {
  runSequence(
  	['data','images','transpile'],
  	['scripts-testing','sass'],
  	'serve'
  	);
  });
