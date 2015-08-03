var app = angular.module('ObjectToMap', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider.when('/',{
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/categories/',{
		controller: 'CategoriesController',
		templateUrl: 'views/categories.html'
	})
	.when('/categories/new-category',{
		controller: 'NewCategoryController',
		templateUrl: 'views/new_category.html'
	})
	.when('/categories/:id',{
		controller: 'EditCategoryController',
		templateUrl: 'views/edit_category.html'
	});
});
var apiBaseUrl = "http://localhost:8080/";