angular.module('myApp').controller('BusinessEntryCtrl', function ($scope, $filter) {
		
	$scope.suburbs = [{ Name: "TST" },{ Name: "Central" }, { Name: "TKO" }];
	$scope.business = { Type: "private" };

	$scope.searchLocation = function(){
		$scope.ons.navigator.pushPage('LocationSearchPage.html', {location: $scope.lesson.Location });
	}
});