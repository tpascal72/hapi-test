/*
	Create.js
	Description: Creation of a user to the database for the first time. Also includes
	password and activation code creation/storage.

	Author: Thomas Pascal
	Date: August 18 2015
*/
var db = require('../../store/db');

function put(user){;
	console.log(user);
	
	//Initializing bCrypt
	var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);


	return db("Users")
		.insert({userName: user.name, password: bcrypt.hashSync(user.pass, salt), email: user.email, activated: false})
		.then(function (newIds) {return Promise.resolve(newIds[0]); });
}

function makeCode()
{
	var code = "";
	var used
}

module.exports = put;