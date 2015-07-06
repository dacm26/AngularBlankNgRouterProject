(function(){
	var app = angular.module('store', ['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider.when('/notes',{
			templateUrl: 'views/test.html'
		})

		.otherwise( {redirectTo: '/notes'} );
	});
})();