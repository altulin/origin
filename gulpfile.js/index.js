const plugins = require(`./modules/plugins.js`).plaginsObject;
const util = require(`./modules/util.js`).util;



// const defaultArray = [`getWatchers`, `browsersync`];
const defaultArray = [`makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `getScriptFile`, `createWebp`, `transformPug`, `htmlPrettify`, `getWatchers`, `browsersync`];

const initArray = [`makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `getScriptFile`, `createWebp`, `transformPug`, `htmlPrettify`];

const testArray = [`browsersyncTest`]

const buildArray = [`cleanImg`, `makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `getScriptFile`, `createWebp`, `transformPug`, `htmlPrettify`, `getCopying`]

exports.default = plugins.gulp.parallel(util.getTasksIndex(defaultArray));
exports.test = plugins.gulp.parallel(util.getTasksIndex(testArray));
exports.init = plugins.gulp.series(util.getTasksIndex(initArray));
exports.build = plugins.gulp.series(util.getTasksIndex(buildArray))

