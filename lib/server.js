'use strict';

var net = require('net');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

//
// <a name='constructor'></a>
// Constructor
// -----------
//
// #### Code
function Server () {
  this.server = net.createServer();
}

Server.prototype.listen = function listen() {
  var self = this;
  var args = Array.prototype.slice.call(arguments);
  return (self.server.listen.apply(self.server, args));
};

util.inherits(Server, EventEmitter);
module.exports = Server;
