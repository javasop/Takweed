'use strict';

var gulp = require('gulp');
var serve = require('browser-sync');

// this is going to load mindmapper which is responsible for reading that type of file
// I might parse the whole things first? meaning any html in the whole content to save time? and write it again?


module.exports = function(options) {
gulp.task('watch', function(options){
	gulp.watch(options.src, ['webpack', serve.reload()]);
});
};
