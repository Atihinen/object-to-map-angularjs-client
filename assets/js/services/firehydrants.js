app.factory('firehydrants', ['$http', function($http) {
	return({
		getFireHydrants: getFireHydrants,
		addFireHydrant: addFireHydrant,
		deleteFireHydrant: deleteFireHydrant
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

	function addFireHydrant(catId, lat, lng, desc, trunk){
		var payload = $.param({
			category_id: catId,
			latitude: lat,
			longitude: lng,
			description: desc,
			trunk_line_diameter: trunk
		});
		return $http({
			method: 'POST',
			url: apiBaseUrl+'fire-hydrant/new/',
			data: payload,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data){
			return data;
		})
		.error(function(err){
			alert("Something went wrong");
			return err;
		})
	}

	function deleteFireHydrant(id){
		return $http.delete(apiBaseUrl+'fire-hydrant/'+id+'/')
			.success(function(data){
				return data;
			})
			.error(function(err){
				alert("Something went wrong.");
				return err;
			});
	}
}]);