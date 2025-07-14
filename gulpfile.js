const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

function styles() {
    return gulp.src('./src/styles/*.scss') // Source folder for SCSS files
        .pipe(sass( {outputStyle: 'compressed' } )) // Compile SCSS to CSS and log errors
        .pipe(gulp.dest('./dist/css')); // Destination folder for compiled CSS files
}

function images() {
    return gulp.src('src/images/**/*')
    .pipe(imagemin([
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminSvgo()
    ]))
    .pipe(gulp.dest('dist/images'));
}

exports.default = gulp.parallel(styles, images); // Default task to run styles and images tasks in parallel
exports.watch = function() {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles, images)); // Watch for changes in SCSS files
}