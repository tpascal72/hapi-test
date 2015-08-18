var db = require('../../store/db');
var Promise = require('bluebird');


function activate(data){

	console.log(data);

	var promise = new Promise(function (resolve, reject) {



		db("Users")
		.select("activationCode")
		.where("userName", data[0])
		.then(function (items)
			{
				console.log(items[0].activationCode);
				console.log(items[0].password);
				if (data[1] == items[0].activationCode) 
				{
            		resolve(Promise.resolve("You have successfully activated your account!"));
        		}
        		else
        		{
        			console.log('Error - activation code does not match');
                	return reject("[COMPARE] ");
        		}
			}
		)
		.then(function (i)
		{
			console.log("Entered second then");
		});
    });

    return promise;
}

module.exports  = activate;