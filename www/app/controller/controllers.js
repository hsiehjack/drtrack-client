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
  $scope.dashboardOptions = ['Evaucee', 'Check-In', 'Search', 'Report', 'Settings', 'Logout'];
});
