const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;
const path = require(`${__dirname}/variables.js`).path;
const util = require(`${__dirname}/util.js`).util;

const watch = pluginsPath.gulp.watch;
const browserSync = pluginsPath.browserSync;


module.exports.getWatchers = () => {
  watch([path.project.jsFiles, `!${path.dist.jsFile}`, `!${path.dist.jsMinFile}`], util.getTasksWatch(`getScriptFile`));// Выбираем все файлы JS в проекте, а затем исключим
  watch([path.project.sassFiles, `!${path.made.sassFile}`], util.getTasksWatch(`getStyleFile`));
  // watch([path.project.pugFiles], util.getTasksWatch(`transformPug`));
  watch([path.project.pugFolder], util.getTasksWatch(`transformPug`));

  watch(path.project.rasterImg, util.getTasksWatch(`makeImages`));
  watch(path.project.webpImg, util.getTasksWatch(`createWebp`));
  watch(path.project.vectorImg, util.getTasksWatch(`makeImagesSvg`));
  watch(path.project.spriteFolder, util.getTasksWatch(`createSprite`));
  watch(path.dist.fontsFiles, browserSync.reload());
}
