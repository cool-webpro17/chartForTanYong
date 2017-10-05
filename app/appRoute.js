angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
  	$routeProvider
  		// home page
      .when('/click-rate', {
        templateUrl: 'views/click_rate.html',
        controller: 'HomeController'
      })
      .when('/open-rate', {
        templateUrl: 'views/open_rate.html',
        controller: 'HomeController'
      })
      .when('/rpr', {
        templateUrl: 'views/rpr.html',
        controller: 'HomeController'
      })
  		.otherwise('/click-rate', {
  			templateUrl: 'views/click_rate.html',
  			controller: 'HomeController'
  		});
}]);
