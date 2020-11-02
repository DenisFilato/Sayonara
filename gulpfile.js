const gulp = require('gulp');
const browserSync =  require('browser-sync').create();

gulp.task('hello', function(done) {
console.log('привет мир');
done();
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("app/*html").on('change', browserSync.reload);
});
