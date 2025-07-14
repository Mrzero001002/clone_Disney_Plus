const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // Source folder for SCSS files
        .pipe(sass( {outputStyle: 'compressed' } )) // Compile SCSS to CSS and log errors
        .pipe(gulp.dest('./dist/css')); // Destination folder for compiled CSS files
}

exports.default = styles;
exports.watch = function() {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Watch for changes in SCSS files
}