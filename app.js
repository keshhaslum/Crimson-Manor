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

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/clues', cluesRouter); 
app.use('/api/rooms', roomsRouter);

module.exports = app;
