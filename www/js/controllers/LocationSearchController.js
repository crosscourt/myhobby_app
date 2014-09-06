angular.module('myApp').controller('LocationSearchCtrl', function ($scope, $filter, FoursquareService) {
		
	//$scope.searchedPlaces = [{Name: "test"}];

	FoursquareService.searchPlaces($scope.searchText, searchCallback);
	
	function searchCallback(places)
	{
		//$scope.searchedPlaces.length = 0; // clear
		//$scope.searchedPlaces.concat(places);
		$scope.searchedPlaces = places;
		$scope.searchedPlaces = [{Name:"2"}];
	}
  
});