app.controller('loginCtrl', function($scope) {
});

app.controller('userCtrl', function($scope, $filter, $ionicPlatform) {
  $ionicPlatform.registerBackButtonAction(function () {
    navigator.app.backHistory();
  }, 100);

  $scope.nationalities = [
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

app.controller('barcodeCtrl', function($scope, $ionicPopup) {
  $scope.evacuee = {};
  $scope.scanDatas = [];
  $scope.manualCheckin = function() {
    if ($scope.evacuee.code) {
      $scope.scanDatas.push({'text': $scope.evacuee.code, 'format': 'Manual Add'});
      angular.copy($scope.initial, $scope.evacuee);
    }
  };
});
