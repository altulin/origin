const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const newer = pluginsPath.newer;
const imagemin = pluginsPath.imagemin;


module.exports.makeImages = () => {
  return src(path.project.rasterImg) // Берём все изображения из папки источника
    .pipe(newer(path.made.imgFolder)) // Проверяем, было ли изменено (сжато) изображение ранее
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),

    ])) // Сжимаем и оптимизируем изображеня
    .pipe(dest(path.made.imgFolder)) // Выгружаем оптимизированные изображения в папку назначения
};
