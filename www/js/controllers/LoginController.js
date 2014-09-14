angular.module('myApp').controller('LoginCtrl', function ($scope, $http, AuthService) {
  
  //var user = myNavigator.getCurrentPage().options.user;
  AuthService.getLogin().then(function(loginDetails) {
	$scope.user = { Email: loginDetails.Username, Password: "" };
  }); 
  
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