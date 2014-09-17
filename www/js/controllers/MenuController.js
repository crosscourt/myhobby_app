angular.module('myApp').controller('MenuCtrl', function ($scope, $rootScope, AuthService) {
  
	$scope.showLogin = true;
	$scope.showLogout = false;
	updateLogin();
	
    $scope.$on('user:updated', function(event, loggedIn) {
		updateLogin();
    });
	
	function updateLogin() {
		$scope.showLogin = !AuthService.IsLoggedIn;
		$scope.showLogout = AuthService.IsLoggedIn;
	}
	
	$scope.logout = function() {
		AuthService.logout();
	}
 
});