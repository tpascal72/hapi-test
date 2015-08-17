var db = require('../../store/db');

function put(item){
	console.log(typeof item);
	console.log(item);
	console.log(item.name);
	console.log(item['"name']);
	var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
	return db("items")
		.insert({name: item.name, password: bcrypt.hashSync(item.pass, salt)})
		.then(function (newIds) {return Promise.resolve(newIds[0]); });
}

module.exports = put;