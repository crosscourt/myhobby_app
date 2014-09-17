angular.module('myApp').service('FbService', function ($rootScope) {
  
	var service =  {
	
		watchLoginChange: function() {

			var _self = this;

			FB.Event.subscribe('auth.authResponseChange', function(response) {

				if (response.status === 'connected') {
					
					/* 
					 The user is already logged, 
					 is possible retrieve his personal info
					*/
					_self.getUserInfo();

					/*
					 This is also the point where you should create a 
					 session for the current user.
					 For this purpose you can use the data inside the 
					 response.authResponse object.
					*/

				} 
				else {

					/*
					 The user is not logged to the app, or into Facebook:
		 			 destroy the session on the server.
					*/
					 
				}

			});

		},

		getUserInfo: function() {

			var _self = this;

/*

first_name: "Anthony"
gender: "male"
id: "10152346972885823"
last_name: "Cheung"
link: "https://www.facebook.com/app_scoped_user_id/10152346972885823/"
locale: "en_US"
name: "Anthony Cheung"
timezone: 8
updated_time: "2014-05-27T14:40:51+0000"
verified: true

	*/

			FB.api('/me', function(response) {

				$rootScope.$apply(function() { 

					$rootScope.user = _self.user = response; 

				});

			});

		},

		logout: function() {

			var _self = this;

			FB.logout(function(response) {

				$rootScope.$apply(function() { 

					$rootScope.user = _self.user = {}; 

				});	

			});

		}
	
	};
	
	return service;
  
});