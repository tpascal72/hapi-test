var server = require('../server');
var path = require('path');

//Load items api
require('./items/routes');

var staticPath = path.join(path.resolve(__dirname, "../../", "front-end"));

var staticRoute = {
	method: "GET",
	path: "/{param}",
	handler: {
		directory: {
			path: staticPath
		}
	}
};

console.log('loading routes...');
server.route(staticRoute);