angular.module('myApp').service('AuthService', function ($rootScope, $http, $q) {
  
  var user;
  var isLoggedIn;
  var token;
  
  return {
	
	User: function() { return user; },
	IsLoggedIn: function() { return isLoggedIn; },
	Token: function() { return token; },
	
	login: function(user){
		var deferred = $q.defer();
		
		deferred.resolve({ Success: true });		
		/*
		$http.post('http://localhost:64180/api/authenticate', {username: user.Email, password: user.Password})
			.success(function(result){
				if (result.Success){
					this.isLoggedIn = true;
					this.token = result.ApiToken;
					$http.defaults.headers.common.Authorization = result.ApiToken;
				}
				else {
					this.isLoggedIn = false;
				}

				deferred.resolve(result);
			}).error(function (data, status, headers, config) {
                var err = "login: " + status;
				deferred.reject(err);
				console.log(err);
            });
			*/
		return deferred.promise;
	},
	
	logout: function(){
	}
	
  }
  
});