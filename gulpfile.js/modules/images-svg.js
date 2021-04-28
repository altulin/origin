const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const imagemin = pluginsPath.imagemin;
// const del = pluginsPath.del;
const newer = pluginsPath.newer;


module.exports.makeImagesSvg = () => {
  // del(path.made.svgFolder, { force: true });
  // del(`_src/img/svg/`, { force: true });
  return src(path.project.vectorImg) // Берём все изображения из папки источника

    .pipe(newer(path.made.svgFolder)) // Проверяем, было ли изменено (сжато) изображение ранее
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest(path.made.svgFolder)) // Выгружаем оптимизированные изображения в папку назначения
};
