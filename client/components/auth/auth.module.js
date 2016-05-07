'use strict';

angular.module('suitsIiApp.auth', [
  'suitsIiApp.constants',
  'suitsIiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
