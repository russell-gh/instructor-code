const fs = require("fs");
const { series, parallel } = require("gulp");
const rimraf = require("rimraf");
const html = require("./tasks/html").default;
const css = require("./tasks/css").default;
const js = require("./tasks/js").default;
const destPath = "./dist";


// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  rimraf(destPath, cb);
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  if (!fs.existsSync(destPath)) {
    console.log('dist doesn\'t exist')
    fs.mkdir(destPath, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`New dist directory at ${destPath} successfully created.`);
        // parallel(html, css, js);
        html();
        css();
        js();
      }
    });
  } else {
    console.log('dist folder already exists');
    // parallel(html, css, js);
    html();
    css();
    js();
  }
  cb();
}

exports.build = build;
exports.default = series(clean, build);
