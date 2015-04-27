app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'userCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
