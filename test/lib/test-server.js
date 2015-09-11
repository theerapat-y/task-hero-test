'use strict';
let app = require('../../src/app');
let http = require('http');
let debug = require('debug')('task-hero:test:server');
let port = process.env.PORT || 3333;
app.set('port', port);

/**
 * Create Test HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', (err) => {
    if (err.syscall !== 'listen') {
        throw err;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (err.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw err;
    }
});

server.on('listening', () => {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Test server is listening on ' + bind);
});

module.exports.request = require('supertest').agent(server);
module.exports.shutdown = (cb)=> {
  return new Promise((resolve)=>{
    server.close(()=>{
      debug('Test Server has been shutdown!');
      resolve();
    });
  });
};
