'use strict';

angular.module('suitsIiApp')
  .directive('menu', function () {
      return {
          templateUrl: 'components/menu/menu.html',
          restrict: 'A',
          link: function (scope, element) {
          },
          controller: 'MenuController',
          controllerAs: 'menu',
      };
  });
