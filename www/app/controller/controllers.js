app.controller('loginCtrl', function($scope) {
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
    {name: 'Logout', icon: 'icon ion-log-out'}];
});

app.controller('evacueeCtrl', function($scope, $rootScope, drtrackService) {
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
});

app.controller('checkinCtrl', function($scope, $ionicPopup) {
  $scope.scanner = {};
  $scope.scanDatas = [];
  $scope.manualCheckin = function() {
    var code = $scope.scanner.code;
    if (code) {
      $scope.scanDatas.push({'text': code, 'format': 'Manual Add'});
      angular.copy($scope.initial, code);
    }
  };
});

app.controller('searchCtrl', function($scope) {
  $scope.evacuee = {};
  $scope.results = [
    {name: 'Fake Name'},
    {name: 'Fake Name 2'}
  ];
  $scope.scanDatas = [];
  $scope.edit = function() {
    // Go to Evacuee Pages
    alert('Edit');
  };
});
