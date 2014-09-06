angular.module('myApp').controller('MenuCtrl', function ($scope, $rootScope, AuthService) {
  
  $scope.loginMenu = 'Login';
    
  $rootScope.$watch('isLoggedIn', function() { 
	$scope.loginMenu = $rootScope.isLoggedIn ? 'Logout' : 'Login'; }
	, true);
  
});