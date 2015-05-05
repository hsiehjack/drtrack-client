app.service('drtrackService', function($rootScope) {
  $rootScope.evacuee = [];

  this.setEvacuee = function(data) {
    $rootScope.evacuee = data;
  };
});

app.factory('drtrackFactory', function($http, $q) {
  var login = function(username, password) {
    var deferred = $q.defer();
    $http.post('http://52.4.190.187/api/login', {username: username, password: password}).success(function(data) {
      deferred.resolve(data);
    }).error(function(err) {
      deferred.reject(err);
    });
    return deferred.promise;
  };
  return {
    login: login
  };
});
