'use strict';

angular.module('suitsIIApp', [
      'suitsIIApp.auth',
      'suitsIIApp.admin',
      'suitsIIApp.simulation',
      'suitsIIApp.constants',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'validation.match',
      'ngMaterial',
      'ngMdIcons'
  ])
  .config(function ($urlRouterProvider, $locationProvider, $mdThemingProvider) {
      $urlRouterProvider
        .otherwise('/');

      $locationProvider.html5Mode(true);
      var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
          'contrastDefaultColor': 'light',
          'contrastDarkColors': ['50'],
          '50': 'ffffff'
      });
      $mdThemingProvider.definePalette('customBlue', customBlueMap);
      $mdThemingProvider.theme('default')
        .primaryPalette('red', {
            'default': '800',
            'hue-1': '50'
        }).dark()
        .accentPalette('pink');
      $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey');
  });
