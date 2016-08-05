var gulp 	= require('gulp'),
	cache 	= require('gulp-cached'),
	config	= require('../../config.js');
	

gulp.task('images', function() {
	gulp.src(config.images.src)
	.pipe(cache('image'))
	.pipe(gulp.dest(config.images.dest));
})