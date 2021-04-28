const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const prettify = pluginsPath.prettify;


module.exports.htmlPrettify = () => {
  return src(path.dist.htmlFiles)
    .pipe(prettify({ indent_char: '', indent_size: 2 }))
    .pipe(dest(path.srcFolder))
}
