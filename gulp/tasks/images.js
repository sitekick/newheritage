var gulp 	= require('gulp'),
	cache = require('gulp-cached'),
	config 	= require('../config');

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images-D', function() {
  return gulp.src(config.images.src)
    .pipe(cache('image'))
    .pipe(gulp.dest(config.images.dest.dev));
});

gulp.task('images-P', function() {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest.prod));
});