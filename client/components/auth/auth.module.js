'use strict';

angular.module('suitsIIApp.auth', [
  'suitsIIApp.constants',
  'suitsIIApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
