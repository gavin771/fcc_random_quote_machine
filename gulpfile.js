var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var install = require("gulp-install");

gulp.task('build', function () {
  gulp.src(['./bower.json', './package.json'])
    .pipe(gulp.dest('./dist/'))
    .pipe(install());
});

gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});