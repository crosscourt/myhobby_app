angular.module('myApp').controller('BusinessesCtrl', function ($scope, $filter) {
		
	$scope.businesses = [
		{ Id: "1", Name: "Private Kitchen", Address: "123 evergreen terrace", Suburb: "Kowloon Tong", Category: "Cooking", ShortDescription: "cook cook cook" },
		{ Id: "2", Name: "Tennis", Address: "123 evergreen terrace", Suburb: "Kowloon Tong", Category: "Sports", ShortDescription: "do you want to be the next Federer, Nadal?" }];

	$scope.isAdmin = false;
		
	$scope.showDetails = function(index){
		var selectedBusiness = $scope.businesses[index];
		myNavigator.pushPage('business.html', {business: selectedBusiness });
	}
	
	$scope.addBusiness = function(){		
		//$scope.ons.
		myNavigator.pushPage('businessEntry.html');
	}
});