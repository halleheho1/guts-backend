const mongoose = require('mongoose');
const Health = mongoose.model('Health');

function getRow() {
  result = Health.findOne();
  return result;
}

module.exports = { getRow };
