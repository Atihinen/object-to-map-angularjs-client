app.controller('CategoriesController', ['$scope', 'categories', function($scope, categoriesService) {
	$scope.isLoading = false;
	categoriesService.categories().success(function(data) {
		$scope.isLoading = true;
		$scope.categories = data;
	})
	.finally(function(){
		$scope.isLoading = false;
	});

	$scope.deleteCategory = function(id){
		res = confirm("Haluatko poistaa kategorian?");
		if(res === true){
			$scope.isLoading = true;
			categoriesService.deleteCategory(id).success(function(data){
				categoriesService.categories().success(function(data){
					$scope.categories = data;
				})
				.finally(function(){
					$scope.isLoading = false;
				});
			});
		}
	}

}]);