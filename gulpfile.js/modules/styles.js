const util = require(`${__dirname}/util.js`).util;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;
const variablesPath = require(`${__dirname}/variables.js`);

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const sourcemaps = pluginsPath.sourcemaps;
const concat = pluginsPath.concat;
const browserSync = pluginsPath.browserSync;
const sass = pluginsPath.sass;
const autoprefixer = pluginsPath.autoprefixer;

const plugunsCss = variablesPath.plugunsCss;
const plugunsCssUsed = variablesPath.plugunsCssUsed;
const path = variablesPath.path;

module.exports.getStyleFile = () => {
  return src(util.getPlugunsList(plugunsCss, plugunsCssUsed))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat(path.project.cssFile)) // Конкатенируем в файл
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
    // .pipe(cleancss({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })) // Минифицируем стили
    .pipe(sourcemaps.write(".")) //добавляем карту
    .pipe(dest(path.made.cssFolder)) // Выгрузим результат в папку
    .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}
