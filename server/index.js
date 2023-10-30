// start your server and attach any middleware here
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('./db/client');
const api = require('./api');

const PORT = 8080;

const createServer = () => {
  const server = express();

  // init cors
  server.use(cors());

  // logging middleware
  server.use(morgan('dev'));

  // init body-parser
  server.use(bodyParser.json());

  // connect to the client
  client.connect().then(() => console.log('connected'));

  // Router: /api
  server.use('/api', api);

  let listener;
  if (process.env.NODE_ENV !== 'test') {
    listener = server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }

  return { server, listener };
};

module.exports = createServer;

if (require.main === module) {
  createServer();
}
