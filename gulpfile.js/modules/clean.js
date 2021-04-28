const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;
const del = pluginsPath.del;

module.exports.clean = () => {
  return del(path.distFolder, { force: true }); // Удаляем всю папку продакшн
};

module.exports.cleanImg = () => {
  return del(path.made.imgFiles, { force: true }); // Удаляем всё содержимое папки "img/"
};
