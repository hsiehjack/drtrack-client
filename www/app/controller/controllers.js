app.controller('loginCtrl', function($scope) {
});

app.controller('userCtrl', function($scope) {
  $scope.dashboardOptions = [
    {name: 'Evacuee', icon: 'icon ion-person-add'},
    {name: 'Check-In', icon: 'icon ion-qr-scanner'},
    {name: 'Search', icon: 'icon ion-search'},
    {name: 'Report', icon: 'icon ion-clipboard'},
    {name: 'Settings', icon: 'icon ion-gear-a'},
    {name: 'Logout', icon: 'icon ion-log-out'}];
  $scope.steps= [
    {step: 'step1', title: 'Personal Info'},
    {step: 'step2', title: 'Nationality'},
    {step: 'step3', title: 'Military Affiliate'},
    {step: 'step4', title: 'Optional'},
    {step: 'step5', title: 'Bracelet'}
  ];

  $scope.getCurrentStepIndex = function() {
    return $scope.steps.indexOf($scope.selection);
  };
  $scope.hasNextStep = function() {
    var stepIndex = $scope.getCurrentStepIndex();
    var nextStep = stepIndex + 1;
    if ($scope.steps[nextStep] !== undefined) {
      return true;
    }
    return false;
  };
  $scope.hasPreviousStep = function() {
    var stepIndex = $scope.getCurrentStepIndex();
    var previousStep = stepIndex - 1;
    if ($scope.steps[previousStep] !== undefined) {
      return true;
    }
    return false;
  };
  $scope.incrementStep = function() {
    if ($scope.hasNextStep()) {
      var stepIndex = $scope.getCurrentStepIndex();
      var nextStep = stepIndex + 1;
      $scope.selection = $scope.steps[nextStep];
    }
  };
  $scope.decrementStep = function() {
    if ($scope.hasPreviousStep()) {
      var stepIndex = $scope.getCurrentStepIndex();
      var previousStep = stepIndex - 1;
      $scope.selection = $scope.steps[previousStep];
    }
  };

  $scope.evacuee = {};
  $scope.selection = $scope.steps[0];
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
