'use strict';

angular.module('suitsIIApp.simulation')
  .config(function($stateProvider) {
    $stateProvider
      .state('simulation', {
        url: '/simulation',
        templateUrl: 'app/simulation/simulation.html',
        controller: 'SimulationController',
        controllerAs: 'simulation'
      });
  });
