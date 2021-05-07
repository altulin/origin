const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const dist = path.dist

module.exports.getCopying = () => {
  return src([ // Выбираем нужные файлы
    dist.cssFile,
    dist.cssMinFile, // стили мин если надо
    dist.fontsFiles,
    dist.jsFile,
    dist.jsMinFile, // скрипты мин если надо
    dist.images,
    dist.htmlFiles,
    dist.icoFiles,
    dist.favFiles,
  ], { base: path.srcFolder }) // Параметр "base" сохраняет структуру проекта при копировании
    .pipe(dest(`${path.distFolder}/`)) // Выгружаем в папку с финальной сборкой
};
