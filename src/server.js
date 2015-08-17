var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ 
	port: 3000,
	labels: "Web"
	});

server.state('data', {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});




server.start(function(err){
	if (err)
		console.error("Error while loading server: " + err);
	console.log('Server running on port: ', server.info.uri);
});




module.exports = server;
