'use strict';

/*jshint node:true*/

var Socket = require('./lib/Socket');

exports.Socket = Socket;

exports.createConnection = function(options) {
	var socksSocket, socksHost, socksPort, socksUserName, socksPwd;

	socksHost = options.socksHost || 'localhost';
	socksPort = options.socksPort || 1080;
	socksUserName = options.socksUserName;
	socksPwd = options.socksPwd;

	socksSocket = new Socket(socksHost, socksPort, socksUserName, socksPwd);

	return socksSocket.connect(options.port, options.host);
};
