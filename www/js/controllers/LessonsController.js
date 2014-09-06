angular.module('myApp').controller('LessonsCtrl', function ($scope, CourseService, LessonService) {
	
	$scope.course = CourseService.selectedCourse;   
	$scope.lessons = [
	{Date: "15/04 Fri", Duration: "2hr", Cost: "$100", Name: "tennis 101", Description: "tennis one on one, make this longer and longer to test out the layout. this should wrap around when it is too long"},
	{Name: "tennis 102", Duration: "1.5hr", Cost: "$3000", Description: "tennis forehand training", Date: "16/04 Sat"}, 
	{Name: "tennis 103", Duration: "30mins", Cost: "$10", Description: "tennis service training", Date: "17/04 Sun"}];
  
	//TripsService.getTrips(getTripsCallback);
	
	function getTripsCallback(data){
		alert(data);
	}
  
	$scope.showLesson = function(index){
		var selectedItem = $scope.lessons[index];
		//LessonService.selectedLesson = selectedItem;
		$scope.ons.navigator.pushPage('Lesson.html', {lesson: selectedItem});
	}
  
});