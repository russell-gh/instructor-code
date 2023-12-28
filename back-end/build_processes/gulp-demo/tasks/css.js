const { src, dest } = require('gulp');

exports.default = function css() {
  return src('src/**/*.css')
    .pipe(dest('dist/'))
    .on('error', (err) => {
      console.log(`Error: ${error}`);
    });
}
