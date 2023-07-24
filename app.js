const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const charactersRouter = require('./routes/characters');
const cluesRouter = require('./routes/clues'); 
const roomsRouter = require('./routes/rooms'); 
const randomRouter = require('./routes/random');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// The next three routes are for serving static files as a result of the build
// These should only be referenced in the case of using vite buld
app.use('/storm.js', express.static('client', {index: 'storm.js'}));
app.use('/static', express.static('client/dist'));
app.use('/', express.static('client/dist', {index: 'index.html'}));
//app.use('/', indexRouter);

// These routes are for the API
app.use('/api/characters', charactersRouter);
app.use('/api/clues', cluesRouter); 
app.use('/api/rooms', roomsRouter);
app.use('/api/random', randomRouter);

module.exports = app;
