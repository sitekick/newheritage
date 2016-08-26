var gulp 	= require('gulp'),
	config 	= require('../../config');

gulp.task('watch', function() {
	gulp.watch(config.scripts.src.build, ['scripts']);
	gulp.watch(config.sass.src, ['sass']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.data.src, ['data']);
});