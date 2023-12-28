const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

exports.default = function js() {
  console.log('JS task');
  return src('src/**/*.js')
  // .pipe((...arguments) => {
  //   return arguments;
  // // })
  //   .pipe(babel())
    .on('error', (err) => {
      console.log(`Error: ${error}`);
    })
    // .pipe(src('vendor/*.js')) // you can add in files here
    // .pipe(uglify())
    .on('error', (err) => {
      console.log(`Error: ${error}`);
    })
    .pipe(dest('dist/'))
    .on('error', (err) => {
      console.log(`Error: ${error}`);
    });
}