var db = require('../../store/db');
var Promise = require('bluebird');
var Bcrypt = require('bcryptjs');


function login(data){

	var promise = new Promise(function (resolve, reject) {

		db("Users")
		.select()
		.where("userName", data.name)
		.then(function (items)
			{
				console.log(data.pass);
				console.log(items[0].password);
				Bcrypt.compare(data.pass, items[0].password, function (err, isCorrect) 
				{
            	
            		if (err)
            		{
            			console.log('Error');
                		return reject("[COMPARE] " + err);
                	}
                	
            		resolve(Promise.resolve(isCorrect));
        		})
			}
		);
    });

    return promise;
}

module.exports  = login;