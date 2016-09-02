var gulp = require('gulp'),
	babel = require('gulp-babel'),
	cache = require('gulp-cached'),
	config = require('../config');


gulp.task('transpile-D', function () {
  
	return gulp.src(config.babel.src)
    .pipe(cache('transpiling'))
    .pipe(babel())
    .pipe(gulp.dest(config.babel.dest));
});

gulp.task('transpile-P', function () {
  
  	return gulp.src(config.babel.src)
    .pipe(babel())
    .pipe(gulp.dest(config.babel.dest));
});

