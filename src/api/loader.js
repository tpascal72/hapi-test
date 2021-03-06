var server = require('../server');
var path = require('path');

//Load items api
console.log('Loading  API routes...');
require('./items/routes');

var staticPath = path.join(path.resolve(__dirname, "../../", "front-end"));

var staticRoute = {
	method: "GET",
	path: "/{param*}",
	handler: {
		directory: {
			path: staticPath,
			listing: true,
			index: true
		}
	}
};

var activatePath = path.join(path.resolve(__dirname, "../../front-end", "activate"));

var activateRoute = {
	method: "GET",
	path: "/activate/{param*}",
	handler: {
		directory: {
			path: activatePath,
			listing: true,
			index: true
		}
	}
};

console.log("Loading public route...");
server.route(staticRoute);
server.route(activateRoute);