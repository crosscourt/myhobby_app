angular.module('myApp').controller('MapCtrl', function ($scope, $timeout) {
		
	$scope.search = function(map){
	
		var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

		var request = {
			location: pyrmont,
			radius: '500',
			query: 'restaurant'
		};

		var service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
		
		return true;
	}
			
		
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8,
		events: {
			tilesloaded: function (map) {
				$scope.$apply(function () {
					$scope.search(map);
				});
			}
		}
	};
	
	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
		  var place = results[i];
		  //createMarker(results[i]);
		}
	  }
	}
	
	// full screen
	//$scope.$watch('$includeContentLoaded', 
	var afterRender = function () {
		//var mapHeight = 500; // or any other calculated value		
		//$("#my-map .angular-google-map-container").height(mapHeight);
		var pageDiv = document.querySelectorAll(".page__content");
		var mapDiv = document.querySelector("#my-map .angular-google-map-container");
		mapDiv.style.width = pageDiv[0].clientWidth + "px";
		mapDiv.style.height = pageDiv[0].clientHeight + "px";
		console.log(pageDiv[0].clientWidth + "px");
		console.log(pageDiv[0].clientHeight + "px");
	}//);
	
	$timeout(afterRender, 0);
});