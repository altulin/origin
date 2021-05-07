const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const gcmq = pluginsPath.gcmq;


module.exports.groupMedia = () => {
  return src(path.dist.cssFile)
    .pipe(gcmq())
    .pipe(dest(path.made.cssFolder))
}
