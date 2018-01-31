var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

gulp.task('css', function () {
    gulp.src('./css/**/*.css')
        .pipe(concat('styles.css')) 
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    // При изменение файлов *.css  запускаем задачу css
    gulp.watch('./css/**/*.css', ['css']);

});