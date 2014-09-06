angular.module('myApp').controller('BusinessCtrl', function ($scope, $filter) {
		
	var business = $scope.ons.navigator.getCurrentPage().options.business;
	$scope.business = business; // BusinessService.GetBusiness(business.Id);

	$scope.showAdmins = function(index){
		var users = [{Id: 1, Name: "anthony"},{Id: 2, Name: "ashley"}];
		myNavigator.pushPage('businessUsers.html', {business: $scope.business, users: users, type: "admin" });
	}
	
	$scope.showStaffs = function(index){
		var users = [];
		$scope.ons.navigator.pushPage('businessUsers.html', {business: $scope.business, users: users, type: "staff" });
	}
	
});