app.factory('firehydrants', ['$http', function($http) {
	return({
		getFireHydrants: getFireHydrants,
		addFireHydrant: addFireHydrant,
		deleteFireHydrant: deleteFireHydrant,
		updateFireHydrant: updateFireHydrant
	})

	function getFireHydrants(){
		return $http.get(apiBaseUrl+'fire-hydrants')
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
			url: apiBaseUrl+'fire-hydrants/new',
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
		return $http.delete(apiBaseUrl+'fire-hydrants/'+id)
			.success(function(data){
				return data;
			})
			.error(function(err){
				alert("Something went wrong.");
				return err;
			});
	}

	function updateFireHydrant(id, catId, lat, lng, desc, trunk){
		var payload = $.param({
			category_id: catId,
			latitude: lat,
			longitude: lng,
			description: desc,
			trunk_line_diameter: trunk
		});
		return $http({
			method: 'PUT',
			url: apiBaseUrl+'fire-hydrants/'+id,
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
}]);