gulp.task('deploy', ['build'], () => {
  return gulp.src('dist')
    .pipe($.subtree())
    .pipe($.clean());
});