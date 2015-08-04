app.controller('NewCategoryController', ['$scope', 'categories', '$location', function($scope, categoriesService, $location){
	$scope.isSaving = false;
	$scope.isConflict = false;
	$scope.serverSideError = false;

	$scope.addCategory = function() {
		initErrorMessages();
		$scope.isSaving = true;
		categoriesService.addCategory($scope.category.name).success(function(data){
			$location.path('/categories');
		})
		.error(function(data){
			console.log(data);
			if(typeof data.name !== "undefined"){
					if(data.name === "DUBLICATE"){
						$scope.isConflict = true;
					}
				}
				else {
					$scope.serverSideError = true;
				}
		})
		.finally(function(){
			$scope.isSaving = false;
		});
		
	}

	function initErrorMessages(){
		$scope.isConflict = false;
		$scope.serverSideError = false;
	}
}]);