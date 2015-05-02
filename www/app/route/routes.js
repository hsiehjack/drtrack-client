// app.config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'partials/login.html',
//       controller: 'loginCtrl'
//     })
//     .when('/dashboard', {
//       templateUrl: 'partials/dashboard.html',
//       controller: 'userCtrl'
//     })
//     .when('/evacuee', {
//       templateUrl: 'partials/evacuee.html',
//       controller: 'userCtrl'
//     })
//     .when('/check-in', {
//       templateUrl: 'partials/checkin.html',
//       controller: 'barcodeCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider
    .tabs
      .style("standard")
      .position("bottom");
  $ionicConfigProvider.views.transition("android");
  $ionicConfigProvider.navBar.alignTitle("center");

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'partials/login.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'userCtrl'
    })
    .state('tabs', {
      url: '/tab',
      templateUrl: 'partials/tabs.html',
      abstract: true
    })
    .state('tabs.evacuee', {
      url: '/evacuee',
      views: {
        'evacuee-tab@tabs': {
          templateUrl: 'partials/evacuee.html'
        }
      }
    })
    .state('tabs.evacuee.step1', {
      url: '/step1',
      views: {
        'evacuee-home@tabs.evacuee': {
          templateUrl: 'partials/step1.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee.step2', {
      url: '/step2',
      views: {
        'evacuee-home@tabs.evacuee': {
          templateUrl: 'partials/step2.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee.step3', {
      url: '/step3',
      views: {
        'evacuee-home@tabs.evacuee': {
          templateUrl: 'partials/step3.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee.step4', {
      url: '/step4',
      views: {
        'evacuee-home@tabs.evacuee': {
          templateUrl: 'partials/step4.html',
          controller: 'evacueeCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
});
