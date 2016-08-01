var gulp	= 	require('gulp'),
	concat	= 	require('gulp-concat'),
	config	= 	require('../../config');
	

gulp.task('scripts', function() {
	
	gulp.src(config.scripts.src)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest));
	
})