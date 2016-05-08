'use strict';

(function () {

    class MainController {
        constructor($state) {
            this.$state = $state;
        }

        go(state) {
            console.log('going to ', state);
            this.$state.go(state);
        }
    }

    angular.module('suitsIIApp')
      .component('main', {
          templateUrl: 'app/main/main.html',
          controller: MainController,
          controllerAs: 'main'
      });

})();
