var app = angular.module('ObjectToMap', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider.when('/',{
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	});
});