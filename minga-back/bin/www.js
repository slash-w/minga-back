#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js'
import debug from 'debug'
import http from 'http'

/**
 * Get port from environment and store in Express.
 */
const logger = debug('back-48:server')
let port = normalizePort(process.env.PORT || '8080'); //cuando hostee me asignan el puerto que tenga libre || 8080
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);  //crea el sv

/**
 * Listen on provided port, on all network interfaces.
 */

function ready(){
  console.log(`<<<-SERVER READY ON PORT ${port}->>>`)
}

//escucha un puerto y se encarga de levantar efectivamente el sv
server.listen(
  port,
  ready);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
