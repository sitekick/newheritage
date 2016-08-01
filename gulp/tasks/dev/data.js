var gulp	=	require('gulp'),
	cache	= 	require('gulp-cached'),
	config	= 	require('../../config');
	

/**
* Copy json data to build folder
* use gulp-cached to track unchanged files
*/

gulp.task('data', function () {
	return gulp.src(config.data.src)
	//.pipe(cache('data'))
	.pipe(gulp.dest(config.data.dest));
});