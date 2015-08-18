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
				if (data[1] == items[0].activationCode) 
				{
					db("Users")
					.where("userName", data[0])
					.update(
					{
						activated: true
					})
					.then(function(log)
					{
						console.log("Set to active");
					});
					
            		resolve(Promise.resolve("You have successfully activated your account!"));
        		}
        		else
        		{
        			console.log('Error - activation code does not match');
                	return reject("[COMPARE] ");
        		}
			}
		);
    });

    return promise;
}

module.exports  = activate;