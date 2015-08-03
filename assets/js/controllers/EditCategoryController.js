app.controller('EditCategoryController', ['$scope', 'categories', '$routeParams', function($scope, categoriesService, $routeParams){
	$scope.categoryId = $routeParams.id;
	$scope.isLoading = false;
	$scope.oldName = null;
	$scope.categoryClass="default";
	$scope.categoryNameClass="bg-default";
	$scope.updateStatus = "glyphicon-question-sign";
	$scope.updateStatusBg = null;

	categoriesService.getCategory($scope.categoryId).success(function(data){
		$scope.isLoading = true;
		$scope.category = data;
		$scope.oldName = $scope.category.name;
	})
	.finally(function(){
		$scope.isLoading = false;
	});

	$scope.updateCategory = function(){
		if($scope.oldName != $scope.category.name){
			$scope.isLoading = true;
			categoriesService.updateCategory($scope.category.id, $scope.category.name)
			.success(function(data){
				$scope.categoryClass="has-success";
				$scope.categoryNameClass="bg-success";
				$scope.updateStatus="glyphicon-ok";
				$scope.updateStatusBg="bg-success";
			})
			.error(function(data){
				$scope.categoryClass="has-error";
				$scope.categoryNameClass="bg-danger";
				$scope.updateStatus="glyphicon-remove";
				$scope.updateStatusBg="bg-danger";

			})
			.finally(function(){
				$scope.isLoading = false;
			});
		}

	}

}]);