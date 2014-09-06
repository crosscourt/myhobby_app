angular.module('myApp').controller('BusinessUsersCtrl', function ($scope, $filter) {
		
	var business = $scope.ons.navigator.getCurrentPage().options.business;
	var users = $scope.ons.navigator.getCurrentPage().options.users;
	$scope.users = users; // Users.GetUsers(listOfIds)
	$scope.type = $scope.ons.navigator.getCurrentPage().options.type;
	
	$scope.showAdmins = function(index){
		var selectedUser = $scope.users[index];
		$scope.ons.navigator.pushPage('adminStaff.html', { user: selectedUser });
	}
	
	$scope.addUser = function() {
		myNavigator.pushPage('searchUsers.html');
	}
	
});