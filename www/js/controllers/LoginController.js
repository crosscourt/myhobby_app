angular.module('myApp').controller('LoginCtrl', function ($scope, $http, AuthService) {
  
  var user = $scope.ons.navigator.getCurrentPage().options.user;
  $scope.user = user;
  
  $scope.login = function(){
	
	AuthService.login($scope.user).then(function(result){
		if (result.Success) {
			$scope.ons.slidingMenu.setAbovePage('home.html');
		} 
		else {
			$scope.loginError = result.Message;
		}
	});
  }
});