'use strict';

class AppController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleSideNav(menuId) {
        console.log('toggling nav for ', menuId);
        this.$mdSidenav(menuId).toggle();
    }
}

angular.module('suitsIiApp')
  .controller('AppController', AppController);
