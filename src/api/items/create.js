var db = require('../../store/db');

function put(item){
	console.log(typeof item);
	console.log(item);
	console.log(item.name);
	console.log(item['"name']);
	return db("items")
		.insert({name: item})
		.then(function (newIds) {return Promise.resolve(newIds[0]); });
}

module.exports = put;