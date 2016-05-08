'use strict';

class AppController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    toggleSideNav(menuId) {
        this.$mdSidenav(menuId).toggle();
    }
}

angular.module('suitsIIApp')
  .controller('AppController', AppController);
