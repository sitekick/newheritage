var gulp 	= require('gulp'),
	cache = require('gulp-cached'),
	config 	= require('../config');


/**
 * Copy json data to build folder
 * if not changed
 */
gulp.task('data-D', function() {
  return gulp.src(config.data.src)
    .pipe(cache('data'))
    .pipe(gulp.dest(config.data.dest.dev));
});

gulp.task('data-P', function() {
  	
  	return gulp.src(config.data.src)
  	.pipe(gulp.dest(config.data.dest.prod));

});