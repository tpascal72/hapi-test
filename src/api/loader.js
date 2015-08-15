var server = require('../server');
var path = require('path');

//Load items api
console.log('Loading  API routes...');
require('./items/routes');

var staticPath = path.join(path.resolve(__dirname, "../../", "front-end"));

var staticRoute = {
	method: "GET",
	path: "/{param}",
	handler: {
		directory: {
			path: staticPath,
			listing: true,
			index: true
		}
	}
};

var createPath = path.join(path.resolve(__dirname, "../../front-end", "createForm"));

var createRoute = {
	method: "GET",
	path: "/createForm/{param*}",
	handler: {
		directory: {
			path: createPath,
			listing: true,
			index: true
		}
	}
};

console.log("Loading public route...");
server.route(staticRoute);