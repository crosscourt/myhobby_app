angular.module('myApp').controller('SearchUsersCtrl', function ($scope, $filter, UserService) {
	
	$scope.searchText = "";
	$scope.users = [];
	
	$scope.$watch('searchText', function (tmpStr)
    {
		if (!tmpStr || tmpStr.length == 0) {
			return 0;
		}
		
        // if searchStr is still the same..
        // go ahead and retrieve the data
        if (tmpStr === $scope.searchText)
        {
			var users = UserService.searchUsers($scope.searchText);
			$scope.users = users;
        }
    });

	/*
	$scope.search = function(keyEvent){
		if (keyEvent.which === 13) {
			var users = UserService.searchUsers($scope.searchText);
			$scope.users = users;
		}
	}
	*/
});