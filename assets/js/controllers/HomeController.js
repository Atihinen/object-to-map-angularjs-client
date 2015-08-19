app.controller('HomeController', ['$scope', 'firehydrants', function($scope, fireHydrantService){
	$scope.map = {center: {latitude: 60.218184, longitude: 24.812150}, zoom: 15};
	$scope.mapContainerClass="col-md-12";
	$scope.fireHydrantContainerClass="hidden";
	$scope.isServerError = false;
	$scope.serverErrorMessage = "";
	$scope.firehydrants = [];
	$scope.markers = [];
	$scope.$watch("showFireHydrantContainer", function(){
		if ($scope.showFireHydrantContainer === true){
			$scope.mapContainerClass = "col-md-8";
			$scope.fireHydrantContainerClass = "col-md-4";
			getFireHydrants();
		}
		else {
			$scope.mapContainerClass = "col-md-12";
			$scope.fireHydrantContainerClass = "hidden";
		}
	});

	function getFireHydrants(){
		fireHydrantService.getFireHydrants().success(function(data){
			console.log(data.length);
			if(data.length != $scope.firehydrants.length){
				$scope.firehydrants = data;
				angular.forEach($scope.firehydrants, function(val){
					$scope.markers.push(createMapMarker(val));
				});
			}
		})
		.error(function(err){
			if(err === null){
				$scope.serverErrorMessage = "Taustajärjestelmässä häiriöitä, ole hyvä ja ota yhteyttä palvelun ylläpitoon.";
			}
			console.log(err);
			$scope.isServerError = true;
		});
	}

	function createMapMarker(data){
		var marker = {
			id: data.id,
			latitude: data.latitude,
			longitude: data.longitude
		};
		return marker;
	}


	getFireHydrants();

}]);