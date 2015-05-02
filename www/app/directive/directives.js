app.directive('codeScan', function($ionicPopup, $ionicPlatform, $cordovaBarcodeScanner, $timeout) {
  return {
    restrict: 'E',
    template: function(elem, attrs) {
      var btnClass = attrs.class || 'button button-light';
      return '<button on-tap="scan()" class="' + btnClass + '">Scan</button>';
    },
    link: function(scope, elem, attr) {
      $ionicPlatform.ready(function() {
        scope.scan = function() {
          // scope.scanDatas.push({'text': 'fakeText', 'format': 'fakeFormat'});
          $cordovaBarcodeScanner.scan().then(function(imageData) {
            if (imageData.cancelled) {
              // Process Data?
              // Cancel is firing twice and this is a super hackish way to cancel one of the back button fire
              // $ionicPopup.alert({
              //   title:'Scan Complete'
              // });
              $timeout(function() {

              }, 100);
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
