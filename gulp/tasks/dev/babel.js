var gulp = require('gulp'),
	babel = require('gulp-babel'),
	cache = require('gulp-cached'),
	config = require('../../config');


gulp.task('transpile', function () {
  return gulp.src(config.babel.src)
    .pipe(cache('transpiling'))
    .pipe(babel())
    .pipe(gulp.dest(config.babel.dest));
});
