var gulp 		= 	require('gulp'),
	wiredep 	= 	require('wiredep').stream,
	inject 		= 	require('gulp-inject'),
	config		= 	require('../../config');
	
	
gulp.task('inject', function() {
	
	var target = gulp.src(config.wiredep.src + config.wiredep.index);
	var sources = gulp.src([
		config.scripts.dest + '/scripts.js',
		config.sass.dest + '/style.css'
	], {read : false});
	
	return target
		.pipe(wiredep())
		.pipe(inject(sources, {relative: true}))
		.pipe(gulp.dest(config.wiredep.src));
})
	
	