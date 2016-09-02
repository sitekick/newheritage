var gulp 	= require('gulp'),
	config 	= require('../config');

gulp.task('watch-D', function() {
	gulp.watch(config.scripts.src.dev, ['scripts']);
	gulp.watch(config.sass.src, ['sass']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.data.src, ['data']);
});