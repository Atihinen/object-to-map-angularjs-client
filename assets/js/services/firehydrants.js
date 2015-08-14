app.factory('firehydrants', ['$http', function($http) {
	return({
		getFireHydrants: getFireHydrants
	})

	function getFireHydrants(){
		return $http.get(apiBaseUrl+'fire-hydrant/')
			.success(function(data){
				return data;
			})
			.error(function(err){
				alert("Something went wrong");
				return err;
			})
	}
}]);