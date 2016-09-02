var gulp = require('gulp'),
	bs = require('browser-sync').create(),
	config 	= require('../config');
	

gulp.task('serve-D', function () {
    
   
    bs.init({
		proxy: config.server.url + config.server.build.dev,
		ui : false
	});
	var path = '.' + config.server.build.dev;
	
	bs.watch(path + '/index.html').on('change', bs.reload);
	bs.watch(path + '/assets/data/**/*.json').on('change', bs.reload);
	bs.watch(path + '/assets/img/**/*.{gif,png,svg,jpg}').on('change', bs.reload);
	bs.watch(path + '/assets/css/style.css').on('change', bs.reload);
	bs.watch(path + '/assets/js/scripts.js').on('change', bs.reload);
	
});


gulp.task('serve-P', function () {
    
    bs.init({
		proxy: config.server.url + config.server.build.prod,
		ui : false
	});

});