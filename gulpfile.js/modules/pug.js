const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const browserSync = pluginsPath.browserSync;
const pug = pluginsPath.pug;


module.exports.transformPug = () => {
  return src(path.project.pugFiles)
    .pipe(pug({ pretty: true })) // Преобразуем в html без минификации
    .pipe(dest(path.srcFolder)) // Выгружаем в папку
    .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}
