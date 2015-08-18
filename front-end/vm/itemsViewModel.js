var Person = function(id, name){
	 
	 this.name = ko.observable(name);
	 this.id = ko.observable(id);
	 
	 
}

function itemsViewModel() {
	var self = this;
	
	self.people = ko.observableArray();
	self.newUserName = ko.observable();
	self.newUserPass = ko.observable();
	self.newUserEmail = ko.observable();

	self.userName = ko.observable();
	self.userPass = ko.observable();

	$.getJSON("/users", function() {
				console.log("Successfully accessed GET - users");
			})
			.done(function(data){
				$.map(data, function(item){ 
				
					var name = item.name;
					var id = item.id;
					
					var person = new Person(id, name);
					self.people.push(person);
					})
				console.log("Done.");
			})
			.fail(function(error){
				console.log("Failed: " + error);	
			})
			.always(function(){
				console.log("Finished.");
			}); 
			
	
	self.create = function() {
		var user = 
		{
			name: this.newUserName(),
			pass: this.newUserPass(),
			email: this.newUserEmail()
		};
		console.log(user);
		var userJSON = ko.toJSON(user);
		console.log(userJSON);
		$.ajax({
			url:"/create", 
			data: userJSON,
			type: 'PUT', 
			contentType: "application/json",
			success: function(data) {console.log(data)}
		});
		
	};

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