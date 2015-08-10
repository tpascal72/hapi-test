var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ 
	port: 3000,
	labels: "Web"
	});




server.start(function(err){
	if (err)
		console.error("Error while loading server: " + err);
	console.log('Server running on port: ', server.info.uri);
});




module.exports = server;
