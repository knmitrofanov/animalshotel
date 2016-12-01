//https://www.npmjs.com/package/gulp#sample-gulpfilejs

var insert = require('gulp-insert');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: [
    'server/data/models/breeds/*.js',//, 
    'client/js/**/*.js', 
    'client/js/*.js',
    //'!client/external/**/*.coffee'
    ],
  images: 'client/img/**/*'
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  console.log("clean");
  return del(['client/gulp']);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  console.log("scripts");
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(insert.transform(function(contents, file) {
      var test = /(module.exports[ ]?=[\w ]+;)/gim;
      var toRemove = /(const[\w ]+=[\w ('./)]+;)/gim;      
      var result = contents.replace(test, "").replace(toRemove, "");
      var comment = '/* local file: ' + file.path + '*/\n';
      return comment +  result;
    }))
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/gulp/js'))
    
});
 
// // Copy all static images 
// gulp.task('images', ['clean'], function() {
//   return gulp.src(paths.images)
//     // Pass in options to the task 
//     .pipe(imagemin({optimizationLevel: 5}))
//     .pipe(gulp.dest('client/gulp/img'));
// });
 
// Rerun the task when a file changes 
gulp.task('watch', function() {

  gulp.watch(paths.scripts, ['scripts']);
//   gulp.watch(paths.images, ['images']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts'/*, 'images'*/]);