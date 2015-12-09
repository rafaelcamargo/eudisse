var eudisse = angular.module('eudisse', ['ngRoute', 'ngResource'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'app/cover/coverView.html',
				controller: 'coverCtrl'
			}).otherwise({
				redirectTo: '/'
			});
		});