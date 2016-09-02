var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	uglify	= require('gulp-uglify'),
	config 	= require('../config');


gulp.task('scripts-D', function() {
	
	gulp.src(config.scripts.src.dev)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest.dev));
	
});

gulp.task('scripts-D--transpiled', function() {
	
	gulp.src(config.scripts.src.dist)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(config.scripts.dest.dev));
	
});

gulp.task('scripts-P', function() {
	
	gulp.src(config.scripts.src.prod)
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.dest.prod));
	
});