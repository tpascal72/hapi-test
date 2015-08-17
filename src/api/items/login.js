var db = require('../../store/db');
var Promise = require('bluebird');
var Bcrypt = require('bcryptjs');


function login(data){
	//select all items from items table
	console.log(data);

	var promise = new Promise(function (resolve, reject) {

		db("items")
		.select()
		.where("name", data.name)
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
/*
	var request = db("items").select();
	if (data)
		request
			.where("name", data.name)
			.then(function (items) 
					{
						console.log(items);
						return Bcrypt.compare(data.pass, items.password, function (err, isValid) 
							{
        						callback(err, isValid, { id: items.id, name: items.name });
    						}
    					);
					}
				);
	return request;
}
*/

module.exports  = login;