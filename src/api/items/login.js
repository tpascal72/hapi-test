var db = require('../../store/db');
var Promise = require('bluebird');

function login(data){
	//select all items from items table
	console.log(data);
	var request = db("items").select();
	if (data)
		request
			.where("name", data.name)
			.then(function (items) {return console.log(items);Promise.resolve(items[0] ); });
	return request;
}

module.exports  = login;