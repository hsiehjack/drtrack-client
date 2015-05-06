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
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'userCtrl'
    })
    .state('report', {
      url: '/report',
      templateUrl: 'partials/report.html',
      controller: 'reportCtrl'
    })
    .state('tabs', {
      url: '/tab',
      templateUrl: 'partials/tabs.html',
      abstract: true
    })
    .state('tabs.evacuee-step1', {
      url: '/evacuee/step1',
      views: {
        'evacuee-tab@tabs': {
          templateUrl: 'partials/evacuee/step1.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee-step2', {
      url: '/evacuee/step2',
      views: {
        'evacuee-tab@tabs': {
          templateUrl: 'partials/evacuee/step2.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee-step3', {
      url: '/evacuee/step3',
      views: {
        'evacuee-tab@tabs': {
          templateUrl: 'partials/evacuee/step3.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.evacuee-step4', {
      url: '/evacuee/step4',
      views: {
        'evacuee-tab@tabs': {
          templateUrl: 'partials/evacuee/step4.html',
          controller: 'evacueeCtrl'
        }
      }
    })
    .state('tabs.checkin', {
      url: '/check-in',
      views: {
        'checkin-tab@tabs': {
          templateUrl: 'partials/checkin.html',
          controller: 'checkinCtrl'
        }
      }
    })
    .state('tabs.search-step1', {
      url: '/search/step1',
      views: {
        'search-tab@tabs': {
          templateUrl: 'partials/search/step1.html',
          controller: 'searchCtrl'
        }
      }
    })
    .state('tabs.search-step2', {
      url: '/search/step2',
      views: {
        'search-tab@tabs': {
          templateUrl: 'partials/search/step2.html',
          controller: 'searchCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
});
