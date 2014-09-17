angular.module('myApp').controller('LoginCtrl', function ($scope, $http, AuthService) {
  
  	//var user = myNavigator.getCurrentPage().options.user;
	AuthService.getLogin().then(function(loginDetails) {
		var email = "";
		if (loginDetails) {
			email = loginDetails.Username;
		}

		$scope.user = { Email: email, Password: "" };
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
  	};

  	$scope.fbLogin = function() {
  		FB.login(function(response) {
	        /*
	        if (response.authResponse) {
	            response.userNotAuthorized = true;
	            _self.loggedIn = true;
	            $rootScope.$broadcast("fbLoginSuccess", response);
	        } else {
	            _self.loggedIn = false;
	            $rootScope.$broadcast("fbLoginFailure");
	        }
	        */
  		});
  	};


});