var gulp 	= require('gulp'),
	del 	= require('del'),
	config 	= require('../config');

/**
 * Delete folders and files
 */
gulp.task('delete-D', function() {
	return del([
		config.delete.dest.dev,
		config.bower.src.dev + config.bower.index,
	]);
});

gulp.task('delete-P', function() {
	return del([
		config.delete.dest.prod,
		config.babel.dest
		]);
});

