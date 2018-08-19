require('dotenv').config();
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      clichRoutes = require('./routes/clichRoutes');

     // assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;
const URL = process.env.MONGODB_URI_PROD || process.env.MONGODB_URI_DEV;
//const URL = process.env.MONGODB_URI_DEV;
mongoose.connect(URL, { useNewUrlParser: true })
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/cliches', clichRoutes);

app.listen( process.env.PORT, () => {
    console.log('Server started on port', process.env.PORT, ' … ');
});

module.exports = app;