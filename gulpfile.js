const gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require("gulp-rename"),
	minifyJS = require('gulp-minify'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(['./*.html'])
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src(['css/import.less'])
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src(['js/*.js'])
		.pipe(minifyJS())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./*.html'], ['html']);
	gulp.watch(['css/*.less'], ['css']);
	gulp.watch(['js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);