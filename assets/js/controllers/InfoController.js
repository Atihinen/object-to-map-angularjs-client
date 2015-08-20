app.controller('InfoController', ['$scope', '$rootScope', 'categories', 'firehydrants', function($scope, $rootScope, categoriesService, fireHydrantService){
	$scope.nMarker = {};
	$scope.invalidId = false;
	$rootScope.addedSuccesfully = false;
	categoriesService.categories().success(function(data){
		$scope.categories = data;
	});

	$scope.sendFireHydrant = function(){
		$scope.invalidId = false;
		console.log("Sending");
		console.log($scope.nMarker);
		if($scope.nMarker.category.id === 'not_defined'){
			$scope.invalidId = true;
			return
		}
		console.log($rootScope.nMarker);
		fireHydrantService.addFireHydrant(
			$scope.nMarker.category.id, 
			$scope.nMarker.latitude,
			$scope.nMarker.longitude,
			$scope.nMarker.description,
			$scope.nMarker.trunkLineDiameter)
			.success(function(data){
				$rootScope.addedSuccesfully = true;
			})
	}

	$rootScope.$watch('nMarker', function(){
		$scope.nMarker = $rootScope.nMarker;
	})

}]);