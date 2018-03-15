
// Env Configuration
require('./config/config');

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const app        = express();

const subjects = require('./routes/v1/subject');

const port = process.env.PORT;

// DB Configuration
const {mongoose} = require('./db/mongoose');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/v1/subjects', subjects);

app.get('/', (req, res) => {
   res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

module.exports = {app};