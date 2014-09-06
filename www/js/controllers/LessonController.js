angular.module('myApp').controller('LessonCtrl', function ($scope, $filter, LessonService, CourseService) {
		
	$scope.course = CourseService.selectedCourse;
	var lesson = $scope.ons.navigator.getCurrentPage().options.lesson;
	
	$scope.lesson = {
		Name: lesson.Name, //"tennis 101", 
		Description: "tennis one on one, make this longer and longer to test out the layout. this should wrap around when it is too long", 
		StartDate: new Date(2014, 6, 17, 9, 0, 0, 0),
		EndDate: new Date(2014, 6, 18, 11, 0, 0, 0),
		Deadline: new Date(2014, 6, 10, 11, 0, 0, 0),
		Location: {Name: "Kln Bay Tennis Courts", Address: "Kowloon Bay Sports Centre"},		
		Cost: "$200",
		CostNotes: "2 hours",		
		MaxStudents: 10,
		AvailableSpots: 2,
		Course: {},
		Institution: { Type: "private", Name: "HK tennis centre", Contact: "1234 9876" },
		Instructor: [{Name: "Anthony"},{Name: "Michael"}]		
		};
  
	$scope.getLessonDate = function(index){
		
		if ($scope.lesson.StartDate.toDateString() == $scope.lesson.EndDate.toDateString()) {
			return $filter('date')($scope.lesson.StartDate, "short") + " to " + $filter('date')($scope.lesson.EndDate, "shortTime");
		}
		else {
			return $filter('date')($scope.lesson.StartDate, "short") + " to " + $filter('date')($scope.lesson.EndDate, "short");
		}
	}
  
	$scope.showCostNotes = function(){
		return $scope.lesson.CostNotes != null && $scope.lesson.CostNotes != "";
	}
	
	$scope.lessonFull = function(){
		return true;
	}
	
	$scope.showMap = function(){
		$scope.ons.navigator.pushPage('map.html', {title: $scope.lesson.Location.Name});
	}
	
    if ($scope.lessonFull())
		$scope.register_text = "full";
	else
		$scope.register_text = "register";	
  
});