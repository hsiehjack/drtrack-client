app.controller('loginCtrl', function($scope) {
});

app.controller('userCtrl', function($scope) {
  // $scope.dashboardOptions = [
  //   {option1: 'Evaucee',
  //    option2: 'Check-In'},
  //    {option1: 'Search',
  //    option2: 'Report'},
  //    {option1: 'Settings',
  //    option2: 'Logout'}
  // ];
  $scope.dashboardOptions = [
    {name: 'Evaucee', page: 'evaucee'},
    {name: 'Check-In', page: 'checkin'},
    {name: 'Search', page: 'search'},
    {name: 'Report', page: 'report'},
    {name: 'Settings', page: 'settings'},
    {name: 'Logout', page: 'logout'}];
});

app.controller('barcodeCtrl', function($scope, $ionicPlatform, $cordovaBarcodeScanner) {
  $ionicPlatform.ready(function() {
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        alert("Barcode Format -> " + imageData.format);
        alert("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        alert("An error happend -> " + error);
      });
    };
  });
});
