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

app.directive('codeScan', function($ionicPopup, $ionicPlatform, $cordovaBarcodeScanner) {
  return {
    restrict: 'E',
    template: '<button ng-click="scan()" class="button button-block button-energized">Scan</button>',
    link: function(scope, elem, attr) {
      $ionicPlatform.ready(function() {
        scope.scan = function() {
          // scope.scanDatas.push({'text': 'fakeText', 'format': 'fakeFormat'});
          $cordovaBarcodeScanner.scan().then(function(imageData) {
            if (imageData.cancelled) {
              // Process Data?
              // Cancel is firing twice and this is a super hackish way to cancel one of the back button fire
              $ionicPopup.alert({
                title:'Scan Complete'
              });
            } else {
              scope.scanDatas.push({'text': imageData.text, 'format': imageData.format});
            }
          }, function(error) {
            alert("Camera Not Working");
          });
        };
      });
    }
  };
});
