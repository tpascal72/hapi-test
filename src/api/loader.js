var server = require('../server');
var path = require('path');

//Load items api
console.log('loading routes...');
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


server.route(staticRoute);