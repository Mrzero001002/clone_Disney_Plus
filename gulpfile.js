const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/script/*.js') // Source folder for JavaScript files
        .pipe(uglify()) // Minify JavaScript files
        .pipe(gulp.dest('./dist/js')); // Destination folder for minified JS files
}

function styles() {
    return gulp.src('./src/styles/*.scss') // Source folder for SCSS files
        .pipe(sass( {outputStyle: 'compressed' } )) // Compile SCSS to CSS and log errors
        .pipe(gulp.dest('./dist/css')); // Destination folder for compiled CSS files
}

function images() {
    return gulp.src('./src/images/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('./dist/images')); 
}

exports.default = gulp.parallel(styles, images, scripts); // Default task to run styles and images tasks in parallel
exports.watch = function() {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Watch for changes in SCSS files
        gulp.watch('./src/script/*.js', gulp.parallel(scripts));
}