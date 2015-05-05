app.service('drtrackService', function($rootScope) {
  $rootScope.evacuee = [];

  this.setEvacuee = function(data) {
    $rootScope.evacuee = data;
  };
});

app.factory('drtrackFactory', function($http, $q) {
  var apiServer = 'http://52.4.190.187';
  var login = function(username, password) {
    var deferred = $q.defer();
    $http.post(apiServer + '/api/login', {username: username, password: password})
      .success(function(data) {
      deferred.resolve(data);
    }).error(function(err) {
        deferred.reject(err);
    });
    return deferred.promise;
  };
  var validateEvacuee = function(data) {
    var deferred = $q.defer();

    $http.post(apiServer + '/api/evacuee/validate', {passport: data.passport || '', driverLic: data.driverLic || '', ssn: data.ssn || ''})
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(err, data) {
        deferred.reject();
      });
    return deferred.promise;
  };
  return {
    login: login,
    validateEvacuee: validateEvacuee
  };
});
