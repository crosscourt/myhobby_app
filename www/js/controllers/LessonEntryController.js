angular.module('myApp').controller('LessonEntryCtrl', function ($scope, $filter, LessonService, CourseService) {
		
	$scope.lesson = { LocationName: "Find location", Location: null };

	$scope.searchLocation = function(){
		$scope.ons.navigator.pushPage('LocationSearchPage.html', {location: $scope.lesson.Location });
	}
});