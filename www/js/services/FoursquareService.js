angular.module('myApp').service('FoursquareService', function ($timeout) {
  // ...
  
  return {
	
	searchPlaces: function(name, callback){
		var places = [{Id:"0", Name: "place1"}, {Id:"1", Name: "place2"}, {Id:"2", Name: "place3"}];
		
		$timeout(function () {
			callback(places);
		}, 2000 );
				
	},
	
  }
  
});