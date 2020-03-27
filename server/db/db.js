const Sequelize = require('sequelize');

module.exports = new Sequelize('thoughts', 'patrick', 'postgres123', {
  host: 'localhost',
  dialect: 'postgres'
});
