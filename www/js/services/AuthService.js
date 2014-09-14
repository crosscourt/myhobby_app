angular.module('myApp').service('AuthService', function ($rootScope, $http, $q) {
  
	var user;
	var isLoggedIn;
	var token;
  
	var service =  {
	
		init: function() {
			try {
				if (!window.openDatabase) {
					alert('Databases are not supported in this browser.');
				} else {
					_db = window.openDatabase('myhobbydb', '1.0', 'hobby database', 2 * 1024 * 1024);
					
					// AUTOINCREMENT - lifetime uniqueness				
					_db.transaction(function (tx) {
					  tx.executeSql('CREATE TABLE IF NOT EXISTS Login (Id INTEGER PRIMARY KEY AUTOINCREMENT, Username, Token, LastLoginTime INTEGER)');  				  
					});
				}
			}
			catch (e) {
				if (e == 2) {
					// Version number mismatch.
					console.log("Invalid database version.");
				} else {
					console.log("Unknown error "+e+".");
				}
				return;
			}
		},
	
		User: function() { return user; },
		IsLoggedIn: function() { return isLoggedIn; },
		Token: function() { return token; },
		
		login: function(user){
			var deferred = $q.defer();
			
			updateLoginDetails({Username: user.Email, Token: "token"});
			
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
		},
		
		getLogin: function() {
			var deferred = $q.defer();
			
			try{
				getloginDetails( 
					function(data){
						deferred.resolve(data);
					}, 
					function(err){
						deferred.reject(err);
					});				
			
			}catch(e){
				deferred.reject(e);
			}

			return deferred.promise;
		}
	
	};
  
	function getloginDetails(success, fail) {

		_db.transaction(function (tx) {
			tx.executeSql('SELECT * FROM Login Where Id = 1', [], 
			function (tx, results) {
				if (results.rows.length > 0) {
					var item = results.rows.item(0);
					var login = { Username: item.Username, Token: item.Token, LastLoginTime: Date.fromYYYYMMDDHHMM(item.LastLoginTime) };
					success(login);
				}
				else {
					success(null);
				}				
			},
			function(err) {
				console.log("Error processing SQL: " + err.code);
				fail(err);
			});
		});  
	}
	
	function updateLoginDetails(loginDetails){
			
		var now = (new Date()).toYYYYMMDDHHMM();
		
		// hard code the PK = 1, we only need one row
		_db.transaction(function (tx) {
			tx.executeSql('INSERT OR REPLACE INTO Login (Id, Username, Token, LastLoginTime) VALUES (?, ?, ?, ?)', [1, loginDetails.Username, loginDetails.Token, now]);
		},
		function (tx, err) {
			console.log("updated login failed: " + err);
		},
		function(tx, results) {
			console.log("updated login");
		});
	}
  
	service.init();  
	return service;
  
});