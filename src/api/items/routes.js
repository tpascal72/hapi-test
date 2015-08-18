var server = require('../../server');
var read = require('./read');
var create = require('./create');
var update = require('./update');
var login = require('./login');


var readRoute = {
	path: "/users/{id?}",
	method: "GET",
	handler: function (request, reply){
		var id = request.params.id || null;
		read(id)
			.then(reply)
			.catch(function (error) {return reply (console.error(error) ); });
	}
};

var createRoute = {
	path: "/create",
	method: "PUT",
	handler: function (request, reply){
		create(request.payload)
			.then(reply)
			.catch(function (error){ return reply(console.error(error)); });
	}
};

var updateRoute = {
	path: "/items",
	method: "POST",
	handler: function (request, reply){
		update(request.payload)
			.then(reply)
			.catch(function (error){ return reply(console.error(error)); });
	}
};

server.route({
  method: "POST",
  path: "/login",
  config: {
    handler: function(request, reply) {

      login(request.payload)
      .then(function(user){
        if (user) {
          //request.auth.session.set(user);
          return reply('Hello').state('data', { firstVisit: false });;
        } else {
          return reply("Bad email or password");
        }
      })
      .catch(function(err){
        return reply("Error");
      });
    }
  }
});

var activateRoute = {
	path: "/activate/{userName, activateCode}",
	method: "POST",
	handler: function (request, reply){
		update(request.payload)
			.then(reply)
			.catch(function (error){ return reply(console.error(error)); });
	}
};

server.route(readRoute);
server.route(createRoute);
server.route(updateRoute);
//server.route(loginRoute);