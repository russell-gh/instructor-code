const { src, dest } = require('gulp');

exports.default = function html() {
  console.log('HTML TASK');
  return src('src/*.html')
    .pipe(dest('dist/'))
    .on('error', (err) => {
      console.log(`Error: ${error}`);
    });
}
