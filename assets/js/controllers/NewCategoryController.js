app.controller('NewCategoryController', ['$scope', 'categories', '$location', function($scope, categoriesService, $location){
	$scope.isSaving = false;
	$scope.addCategory = function() {
		$scope.isSaving = true;
		categoriesService.addCategory($scope.category.name).success(function(data){
			$location.path('/categories');
		})
		.finally(function(){
			$scope.isSaving = false;
		});
		
	}
}]);