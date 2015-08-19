app.controller('InfoController', ['$scope', '$rootScope', 'categories', 'firehydrants', function($scope, $rootScope, categoriesService, fireHydrantService){
	$scope.nMarker = {};
	$scope.sendFireHydrant = function(){
		console.log("Sending");
		console.log($rootScope.nMarker);
	}

	$rootScope.$watch('nMarker', function(){
		console.log("Copied nMarker");
		$scope.nMarker = $rootScope.nMarker;
	})

}]);