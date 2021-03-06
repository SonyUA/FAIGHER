'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');



function sassToCSS(done) {
    gulp.src('./sass/style.scss')
        .pipe(sass({
            errorLogToConsole: true,
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./css/'));
    done();
}
gulp.task('default', gulp.series(watchsassPug))

function watchsassPug() {
    gulp.watch("./sass/**/*", sassToCSS);

}