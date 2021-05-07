const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const browserSync = pluginsPath.browserSync;
const pug = pluginsPath.pug;
const prettify = pluginsPath.prettify;


module.exports.transformPug = () => {
  return src(path.project.pugFiles)
    .pipe(pug()) // Преобразуем в html без минификации
    .pipe(pug({ pretty: true })) // Преобразуем в html без минификации
    .pipe(prettify({ indent_char: '', indent_size: 2 })) //наведем красоту
    .pipe(dest(path.srcFolder)) // Выгружаем в папку
    .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}
