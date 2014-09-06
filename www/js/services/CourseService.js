angular.module('myApp').service('CourseService', function () {
  // ...
  
  return {
	
	getCourses: function(callback){
		var data = [
		{Name: "Tennis fundamentals", Description: "Tennis one on one, make this longer and longer to test out the layout. this should wrap around when it is too long", Institution: {Name: "HK tennis centre", Contact: "1234 9876"}, NextLesson: "2014 Jun"},
		{Name: "Tennis coaching", Description: "Tennis forehand training", Institution: {Name: "HK tennis centre", Contact: "1234 9876"}, NextLesson: "2014 Jul"},
		{Name: "Tennis for kids", Description: "Tennis service training", Institution: {Name: "HK tennis centre", Contact: "1234 9876"}, NextLesson: "2014 Nov"}];
		
		callback(data);
	},
	
	saveTrip: function(trip){
	}
	
  }
  
});