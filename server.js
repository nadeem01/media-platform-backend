const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const auth = require('./routes/auth');
const media = require('./routes/media');

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

const sequelize = new Sequelize('intagelo', 'postgres', 'minapin', {
  host: 'localhost',
  dialect: 'postgres',
});

// routes
app.use('/api/v1/auth/', auth);
app.use('/api/v1/media/', media);

app.listen(port, async () => {
  try {
    console.log(`Example app listening at http://localhost:${port}`);

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
