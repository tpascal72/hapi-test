var Person = function(id, name){
	 
	 this.name = ko.observable(name);
	 this.id = ko.observable(id);
	 
	 
}

function itemsViewModel() {
	var self = this;

	self.userName = ko.observable();
	self.userActivationCode = ko.observable();


	self.update = function(id){
		var id = this.id();
		console.log("update fired.");
		$.ajax({
			url: "/items",
			data: ko.toJSON(id),
			type: "post",
			contentType: "application/json",
			success: function() { console.log("Successfully deleted: "+ this.name())}
		});
		
	};

	self.login = function()
	{
		var user = 
		{
			name: this.userName(),
			pass: this.userPass()
		};
		console.log(user);
		var userLoginJSON = ko.toJSON(user);
		console.log(userLoginJSON);
		$.ajax({
			url:"/login", 
			data: userLoginJSON,
			type: "POST", 
			contentType: "application/json",
			success: function(data) {console.log("Comparison matched!")}
		});
	}	
			

	
}