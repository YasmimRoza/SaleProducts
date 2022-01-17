const express = require('express');

const server = express();

const bodyParser = require('body-parser');
const router = require('./routes');

server.use(bodyParser.json());

server.use(router);

server.listen(8000, console.log('Server on!'));
