var src		=	'./src/',
	dist	= 	'./build/',
	dev		= 	'dev/',
	prod	=	'prod/';
	
	
module.exports = {
	data :  {
		src : src + 'data/*.json',
		dest : dist + dev + 'assets/data'
	},
	scripts : {
		src : 	[src + 'js/**/*.js', '!' + src + 'js/arch/**/*'],
		dest : dist + dev + 'assets/js'
	},
	sass : {
		src : src + 'scss/**/*.scss',
		dest : dist + dev + 'assets/css',
		options : {
			noCache : true,
			compass : false,
			bundleExec : false,
			sourcemap : true,
			style : 'expanded'
		},
		autoprefixer : {
			browsers: ['last 2 versions','safari 5.1','ie 9','opera 12.1','ios 6','android 4'],
			cascade: true
		}
	},
	wiredep : {
		src : dist + dev,
		index : 'index.html'
	}
};
