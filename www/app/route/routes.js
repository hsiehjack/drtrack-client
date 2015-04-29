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
    .when('/evacuee', {
      templateUrl: 'partials/evacuee.html',
      controller: 'userCtrl'
    })
    .when('/check-in', {
      templateUrl: 'partials/checkin.html',
      controller: 'barcodeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
