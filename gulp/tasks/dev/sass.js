var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-ruby-sass'),
	gulpFilter = require('gulp-filter'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cache = require('gulp-cached'),
	config = require('../../config');	
	
	
gulp.task('sass', function() {
	/* filter our sourcemaps */
	var filter = gulpFilter(['*.css','!*.map'], {restore: true});
	
	return sass(config.sass.src, config.sass.options)
		.pipe(cache('sass'))
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(autoprefixer(config.sass.autoprefixer))
		.pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: 'src/scss'}))
		.pipe(gulp.dest(config.sass.dest));
})