app.controller('HomeController', ['$scope', 'firehydrants', function($scope, fireHydrantService){
	$scope.map = {center: {latitude: 60.218184, longitude: 24.812150}, zoom: 15};
	$scope.showFireHydrantContainer = false;

	$scope.$watch("showFireHydrantContainer", function(){
		if ($scope.showFireHydrantContainer === true){
			fireHydrantService.getFireHydrants().success(function(data){
				$scope.firehydrants = data;
				console.log($scope.firehydrants);
			})
		}
	});
}]);