var db = require('../../store/db');
var Promise = require('bluebird');

function get(criteria){
	//select all items from items table
	var request = db("items").select();
	if (criteria)
		request
			.where("id", criteria)
			.then(function (items) {return Promise.resolve(items[0] ); });
	return request;
}

module.exports  = get;