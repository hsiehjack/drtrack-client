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
    .when('/checkin', {
      templateUrl: 'partials/checkin.html',
      controller: 'barcodeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
