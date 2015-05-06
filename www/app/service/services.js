app.service('drtrackService', function($rootScope) {
  $rootScope.evacuee = {};
  $rootScope.results = {};
  var isOperator = true;

  this.setOperator = function(data) {
    isOperator = data;
  };

  this.getOperator = function() {
    return isOperator;
  };

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
      }).error(function(err) {
        deferred.reject();
      });
    return deferred.promise;
  };
  var getManifest = function() {
    var deferred = $q.defer();

    $http.get(apiServer + '/api/manifest')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err, data) {
        deferred.reject();
      });
    return deferred.promise;
  };
  var submitEvacuee = function(data) {
    var deferred = $q.defer();
    $http.post(apiServer + '/api/evacuee', data)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(err) {
        deferred.reject();
      });
    return deferred.promise;
  };
  var searchEvacuee = function(data) {
    var deferred = $q.defer();
    $http.post(apiServer + '/api/evacuee/search', data)
      .success(function(data) {
        deferred.resolve(data);
      }).error(function(err) {
        deferred.reject();
      });
    return deferred.promise;
  };
  return {
    login: login,
    validateEvacuee: validateEvacuee,
    getManifest: getManifest,
    submitEvacuee: submitEvacuee,
    searchEvacuee: searchEvacuee
  };
});
