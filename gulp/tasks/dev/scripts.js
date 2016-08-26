var gulp	= 	require('gulp'),
	concat	= 	require('gulp-concat'),
	config	= 	require('../../config');
	

gulp.task('scripts', function() {
	
	gulp.src(config.scripts.src.build)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest));
	
});

gulp.task('scripts-testing', function() {
	
	gulp.src(config.scripts.src.test)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest));
	
});