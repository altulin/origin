const pathList = require(`${__dirname}/variables.js`).pathList;

const getPlugunsList = (array, arrayUsed) => {
  return arrayUsed.map((item) => {
    return array.get(item);
  });
};


const getTasksIndex = (array) => {

  return array.map((item) => {
    const path = require(`${__dirname}/${pathList.get(item)}.js`)[`${item}`];
    Object.assign(path, { displayName: item });
    return path;
  })
};

const getTasksWatch = (elem) => {
  const path = require(`${__dirname}/${pathList.get(elem)}.js`)[`${elem}`];
  Object.assign(path, { displayName: elem });
  return path;
};

module.exports.util = {
  getPlugunsList,
  getTasksIndex,
  getTasksWatch
}
