app.directive('bottomNav', function($ionicSideMenuDelegate) {
  return {
    restrict: 'E',
    templateUrl: 'partials/bottomNav.html',
    link: function(scope, elem, attr) {
      scope.toggleRight = function() {
        $ionicSideMenuDelegate.toggleRight();
      };
    }
  };
});
