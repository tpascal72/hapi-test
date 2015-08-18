var db = require('../../store/db');
var Promise = require('bluebird');

function get(criteria){
	//select all items from items table
	var request = db("Users").select();
	console.log(criteria);
	if (criteria)
		request
			.where("userName", criteria)
			.then(function (items) {return console.log(items);Promise.resolve(items[0] ); });
	return request;
}

module.exports  = get;