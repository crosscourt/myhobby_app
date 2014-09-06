angular.module('myApp').controller('RegisterCtrl', function ($scope, $http, RegisterService) {
  
  $scope.user = {};
  
  $scope.register = function(){	
	RegisterService.register($scope.user).then(function(result){
		if (result.Success) {
			myNavigator.resetToPage('login.html', { user: $scope.user });
		} 
		else {
			$scope.registerError = result.Message;
	}
	});
  }
  
});