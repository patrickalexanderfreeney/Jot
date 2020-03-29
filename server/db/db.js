const db = require('sequelize');

module.exports = new db('thoughts', 'patrick', 'postgres123', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => {
    console.log('Connected to db!');
  })
  .catch(err => {
    console.error('Not Connected to db!:', err);
  })
  .catch(err => console.log(err));
db.sync().then(result => console.log(result));
