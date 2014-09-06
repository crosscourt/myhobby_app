angular.module('myApp').controller('CourseCtrl', function ($scope, CourseService) {
	
	CourseService.getCourses(getCoursesCallback);
	
	function getCoursesCallback(data){
		$scope.courses = data
	}
  
	$scope.showLessons = function(index){
		var selectedItem = $scope.courses[index];
		CourseService.selectedCourse = selectedItem;
		$scope.ons.navigator.pushPage('LessonsPage.html', {title: selectedItem.Name});
	}
  
});