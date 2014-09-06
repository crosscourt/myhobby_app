//(function() {
//	'use strict';
	var app = angular.module('myMap', []);
	
	app.directive('googleMap', ['$timeout', function(timer) {
		return {
			restrict: 'E',
			replace: true,
			transclude: false,
			scope: {			
			},
			templateUrl: 'js/directives/templates/google-map.html',
			link: function(scope, element, attrs) {
				
				var runAfterRender = function(){
				
					var mapDiv = document.querySelector("#map_canvas");
					console.log(mapDiv);
					var pageDiv = document.querySelectorAll(".navigator-page");
					mapDiv.style.width = pageDiv[0].clientWidth + "px";
					mapDiv.style.height = pageDiv[0].clientHeight + "px";
					
					console.log(pageDiv);
				
					var latlng = new google.maps.LatLng(-34.397, 150.644);
					var myOptions = {
						zoom: 8,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				}
				
				timer(runAfterRender,200);
			}
		};
	}]);
//}());