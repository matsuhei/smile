const constant = require('../constant');

module.exports = (value) => {
  return typeof value === constant.STRING
};
