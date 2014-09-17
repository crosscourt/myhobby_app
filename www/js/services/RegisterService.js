angular.module('myApp').service('RegisterService', function ($rootScope, $http, $q) {
  
	var service =  {
		
		register: function(user){
			var deferred = $q.defer();
		
			//deferred.resolve ({ Success: true });
		
			$http.post('http://localhost:64180/api/users', user)
				.success(function(result){
					deferred.resolve(result);
				}).error(function (data, status, headers, config) {
					var err = "register: " + status;
					deferred.reject(err);
					console.log(err);
				});
				
			return deferred.promise;
		}
	}
  
	return service;
  
});