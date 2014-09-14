angular.module('myApp').service('UserService', function () {
	// ...
	var data = [
		{Id: 1, Name: "Anthony"},
		{Id: 2, Name: "Brad"}
		];
		
	var service =  {		
		
		getUsersByIds: function(userIds){
			return data;
		},
		
		searchUsers: function(searchText){
			return [{Name: searchText}];
		}
	
	};
  
	return service;
  
});