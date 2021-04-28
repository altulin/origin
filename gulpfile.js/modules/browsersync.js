const browserSync = require(`${__dirname}/plugins.js`).plaginsObject.browserSync
const path = require(`${__dirname}/variables.js`).path;

module.exports.browsersync = () => {
  browserSync.init({ // Инициализация Browsersync
    server: { baseDir: path.srcFolder }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000
  })
};

module.exports.browsersyncTest = () => {
  browserSync.init({ // Инициализация Browsersync
    server: { baseDir: path.distFolder }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000
  })
}
