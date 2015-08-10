var server = require('../../server');
var read = require('./read');


var readRoute = {
	path: "/items/{id?}",
	method: "GET",
	handler: function (request, reply){
		var id = request.params.id || null;
		read(id)
			.then(reply)
			.catch(function (error) {return reply (console.error(error) ); });
	}
}

server.route(readRoute);