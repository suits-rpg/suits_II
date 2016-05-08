'use strict';

angular.module('suitsIiApp', [
  'suitsIiApp.auth',
  'suitsIiApp.admin',
  'suitsIiApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match',
  'ngMaterial',
  'ngMdIcons'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
