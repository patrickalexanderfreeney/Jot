const express = require('express');
const app = express();

// Db
const db = require('./db/db');

// Testing Db connection
db.authenticate()
  .then(() => {
    console.log('Connected to db!');
    // db.sync();
  })
  .catch(err => {
    console.error('Not Connected to db!:', err);
  })
  .catch(err => console.log(err));
db.sync().then(result => console.log(result));

// Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('INDEX'));

app.use('/users', require('./routes/users'));
app.use('/thoughts', require('./routes/thoughts'));

const PORT = process.env.port || 5000;
app.listen(PORT, console.log(`Serving on port ${PORT}`));