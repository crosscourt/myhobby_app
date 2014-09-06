angular.module('myApp').service('UserService', function () {
  // ...
  var data = [
		{Id: 1, Name: "Anthony"},
		{Id: 2, Name: "Brad"}
		];
		
  return {
	
	getUsersByIds: function(userIds){

		return data;
	},
	
	searchUsers: function(searchText){
		return [{Name: searchText}];
	}
	
  }
  
});