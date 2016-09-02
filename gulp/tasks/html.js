var gulp 	= require('gulp'),
	cache = require('gulp-cached'),
	config 	= require('../config');

/**
 * Copy html to build folder
 * if not changed
 */
gulp.task('html-D', function() {
  
  return gulp.src(config.html.src)
    .pipe(cache('html'))
    .pipe(gulp.dest(config.html.dest.dev));
     
});

gulp.task('html-P', function() {
  
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest.prod));
     
});