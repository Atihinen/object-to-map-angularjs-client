app.controller('CategoriesController', ['$scope', 'categories', function($scope, categoriesService) {
	$scope.isLoading = false;
	categoriesService.categories().success(function(data) {
		$scope.isLoading = true;
		$scope.categories = data;
	})
	.finally(function(){
		$scope.isLoading = false;
	});

	$scope.deleteCategory = function(){
		res = confirm("Haluatko poistaa kategorian?");
		console.log(res);
	}
}]);