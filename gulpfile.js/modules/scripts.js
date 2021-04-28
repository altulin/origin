const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;
const variablesPath = require(`${__dirname}/variables.js`);
const util = require(`${__dirname}/util.js`).util;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const sourcemaps = pluginsPath.sourcemaps;
const concat = pluginsPath.concat;
const uglify = pluginsPath.uglify;
const browserSync = pluginsPath.browserSync;

const plugunsJs = variablesPath.plugunsJs;
const plugunsJsUsed = variablesPath.plugunsJsUsed;
const path = variablesPath.path;


module.exports.getScriptFile = () => {
  return src(util.getPlugunsList(plugunsJs, plugunsJsUsed))
    .pipe(sourcemaps.init())
    .pipe(concat(path.project.jsFile)) // Конкатенируем в один файл
    // .pipe(sourcemaps.write()) //добавляем карту
    .pipe(dest(path.made.jsFolder)) // Выгружаем готовый файл не мин в папку назначения
    .pipe(concat(path.project.jsMinFile))
    .pipe(uglify()) // Сжимаем JavaScript
    // .pipe(sourcemaps.write()) //добавляем карту
    .pipe(dest(path.made.jsFolder)) // Выгружаем готовый файл мин в папку назначения
    .pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
};
