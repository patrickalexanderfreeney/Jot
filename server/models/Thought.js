const Sequelize = require('sequelize');
const db = require('../db/db');

const Thought = db.define('thought', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
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
  },
  created: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  }
});

module.exports = Thought;
