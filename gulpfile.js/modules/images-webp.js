const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const newer = pluginsPath.newer;
const webp = pluginsPath.webp;

module.exports.createWebp = () => {
  return src(path.project.webpImg)
    .pipe(newer(path.made.webpFolder))
    .pipe(webp())
    .pipe(dest(path.made.webpFolder))
};
