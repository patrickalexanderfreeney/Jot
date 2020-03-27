const Sequelize = require('sequelize');
const db = require('../db/db');

const Thought = db.define('thought', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Thought;
