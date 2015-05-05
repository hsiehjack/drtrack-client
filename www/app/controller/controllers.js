app.controller('loginCtrl', function($scope, drtrackFactory, $location, $http) {
  $scope.login = function(username, password) {
    if (username === undefined || password === undefined) {
      $scope.loginError = true;
    } else {
      drtrackFactory.login(username, password)
      .then(function(data) {
        $scope.loginError = false;
        $location.path('/dashboard');
      }, function(err) {
        $scope.loginError = true;
      });
    }
  };
});

app.controller('userCtrl', function($scope, $filter, $ionicPlatform) {
  $ionicPlatform.registerBackButtonAction(function () {
    navigator.app.backHistory();
  }, 100);
  $scope.dashboardOptions = [
    {name: 'Evacuee', icon: 'icon ion-person-add', link: '#/tab/evacuee/step1'},
    {name: 'Check-In', icon: 'icon ion-qr-scanner', link: '#/tab/check-in'},
    {name: 'Search', icon: 'icon ion-search', link: '#/tab/search/step1'},
    {name: 'Report', icon: 'icon ion-clipboard', link: '#/tab/report'},
    {name: 'Settings', icon: 'icon ion-gear-a'},
    {name: 'Logout', icon: 'icon ion-log-out', link: '#/'}];

});

app.controller('evacueeCtrl', function($scope, $rootScope, drtrackService, drtrackFactory, $ionicPopup) {
  function suggest_nationality(term) {
    var q = term.toLowerCase().trim();
    var results = [];

    for(var i = 0; i < nationalities.length && results.length < 10; i++) {
      var nation = nationalities[i];
      if (nation.toLowerCase().indexOf(q) === 0)
        results.push({label: nation, value: nation});
    }
    return results;
  }
  var nationalities = [
    'Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Antiguans',
    'Argentinean',
    'Armenian',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Barbudans',
    'Batswana',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Brazilian',
    'British',
    'Bruneian',
    'Bulgarian',
    'Burkinabe',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape Verdean',
    'Central African',
    'Chadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Comoran',
    'Congolese',
    'Costa Rican',
    'Croatian',
    'Cuban',
    'Cypriot',
    'Czech',
    'Danish',
    'Djibouti',
    'Dominican',
    'Dutch',
    'East Timorese',
    'Ecuadorean',
    'Egyptian',
    'Emirian',
    'Equatorial Guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Greek',
    'Grenadian',
    'Guatemalan',
    'Guinea-Bissauan',
    'Guinean',
    'Guyanese',
    'Haitian',
    'Herzegovinian',
    'Honduran',
    'Hungarian',
    'I-Kiribati',
    'Icelander',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
    'Kazakhstani',
    'Kenyan',
    'Kittian and Nevisian',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Liberian',
    'Libyan',
    'Liechtensteiner',
    'Lithuanian',
    'Luxembourger',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivan',
    'Malian',
    'Maltese',
    'Marshallese',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monacan',
    'Mongolian',
    'Moroccan',
    'Mosotho',
    'Motswana',
    'Mozambican',
    'Namibian',
    'Nauruan',
    'Nepalese',
    'New Zealander',
    'Nicaraguan',
    'Nigerian',
    'Nigerien',
    'North Korean',
    'Northern Irish',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Panamanian',
    'Papua New Guinean',
    'Paraguayan',
    'Peruvian',
    'Polish',
    'Portuguese',
    'Qatari',
    'Romanian',
    'Russian',
    'Rwandan',
    'Saint Lucian',
    'Salvadoran',
    'Samoan',
    'San Marinese',
    'Sao Tomean',
    'Saudi',
    'Scottish',
    'Senegalese',
    'Serbian',
    'Seychellois',
    'Sierra Leonean',
    'Singaporean',
    'Slovakian',
    'Slovenian',
    'Solomon Islander',
    'Somali',
    'South African',
    'South Korean',
    'Spanish',
    'Sri Lankan',
    'Sudanese',
    'Surinamer',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
    'Togolese',
    'Tongan',
    'Trinidadian',
    'Tunisian',
    'Turkish',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbekistani',
    'Venezuelan',
    'Welsh',
    'Vietnamese',
    'Yemenite',
    'Zambian',
    'Zimbabwean'];
  $scope.autocomplete_options = {
    suggest: suggest_nationality
  };
  $scope.scanDatas = [];
  $scope.$watch('scanDatas', function() {
    if ($scope.scanDatas.length > 0) {
      $rootScope.evacuee.code = $scope.scanDatas[0].text || null;
    }
  }, true);
  $scope.clearEvacuee = function() {
    $rootScope.evacuee = [];
  };
  $scope.validateEvacuee = function() {
    var data = {
      passport: $rootScope.evacuee.passport || '',
      driverLic: $rootScope.evacuee.driverLic || '',
      ssn: $rootScope.evacuee.ssn || ''
    };
    if (data) {
      drtrackFactory.validateEvacuee(data)
        .then(function(data) {
          $ionicPopup.alert({
            title: 'Evacuee Existed',
            template: 'Imported'
          });
          $rootScope.evacuee = data[0];
        });
    }
  };
});

app.controller('checkinCtrl', function($scope, $ionicPopup) {
  $scope.transports = [
    {id: 1, name: "The Bus", type: "Bus", capacity: 30, space: 1},
    {id: 2, name: "The Train", type: "Train", capacity: 100, space: 50},
    {id: 3, name: "The Airplane", type: "Airplane", capacity: 200, space: 20},
    {id: 4, name: "The Ship", type: "Ship", capacity: 1000, space: 0},
    {id: 5, name: "The Bus 2", type: "Bus", capacity: 30, space: 1},
    {id: 6, name: "The Train 2", type: "Train", capacity: 100, space: 50},
    {id: 7, name: "The Airplane 2", type: "Airplane", capacity: 200, space: 20},
    {id: 8, name: "The Ship 2", type: "Ship", capacity: 1000, space: 0},
    {id: 9, name: "The Bus 3", type: "Bus", capacity: 30, space: 1},
    {id: 10, name: "The Train 3", type: "Train", capacity: 100, space: 50},
    {id: 11, name: "The Airplane 3", type: "Airplane", capacity: 200, space: 20},
    {id: 12, name: "The Ship 3", type: "Ship", capacity: 1000, space: 0}
  ];
  $scope.scanner = {};
  $scope.scanDatas = [];
  $scope.manualCheckin = function() {
    var code = $scope.scanner.code;
    if (code) {
      $scope.scanDatas.unshift({'text': code, 'format': 'Manual Add'});
      $scope.scanner.code = null;
    }
  };
});

app.controller('searchCtrl', function($scope, $rootScope, drtrackService) {
  $scope.results = [
    {firstName: 'Jack', lastName: 'Doe', gender: 'Male'},
    {firstName: 'Mike', lastName: 'Doe', gender: 'Male'},
    {firstName: 'Will', lastName: 'Doe', gender: 'Male'}
  ];
  $scope.setEvacuee = function(index) {
    $rootScope.evacuee = $scope.results[index];
  }
  $scope.scanDatas = [];
  $scope.edit = function() {
    // Go to Evacuee Pages
    alert('Edit');
  };
});
