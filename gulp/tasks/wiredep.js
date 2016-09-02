var gulp 			= require('gulp'),
	gutil			= require('gulp-util'),
	wiredep 		= require('wiredep').stream,
	inject 			= require('gulp-inject'),
	config 			= require('../config');

 
gulp.task('inject-D', function(){
	
	var target = gulp.src(config.bower.src.dev + config.bower.index);
	var sources = gulp.src([
		config.scripts.dest.dev + '/scripts.js',
		config.sass.dest.dev + '/style.css'
	],{read: false});
	
	//gutil.log(config.bower);

	return target.pipe(wiredep()).pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest(config.bower.src.dev));

});

gulp.task('inject-P', function(){
	
	var target = gulp.src(config.bower.src.prod + config.bower.index);
	var sources = gulp.src([
		config.scripts.dest.prod + '/scripts.js',
		config.sass.dest.prod + '/style.css'
	],{read: false});
	
	//gutil.log(config.bower);

	return target.pipe(wiredep()).pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest(config.bower.src.prod));

});

