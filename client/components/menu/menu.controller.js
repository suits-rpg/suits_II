'use strict';

const menus = [
    {
        link: 'main',
        title: 'Home',
        icon: 'home'
    },
    {
        link: 'login',
        title: 'Log In',
        icon: 'login',
        show: (Auth) => !Auth.isLoggedIn()
    },
    {
        link: 'logout',
        title: 'Log Out',
        icon: 'logout',
        show: (Auth) => Auth.isLoggedIn()
    },
    {
        link: 'rules',
        title: 'Rules',
        icon: 'info'
    }
];

class MenuController {
    constructor(Auth, $state, $mdSidenav, $scope) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        this.Auth = Auth;
        
        const updateMenu = angular.bind(this, () => {
            this.menus =  menus.filter(item => item.show ? item.show(Auth) : true);
        });

        Auth.onUser(updateMenu);
        $scope.$on('$destroy', () => Auth.offUser(updateMenu));
    }

    close () {
        this.$mdSidenav('left').close();
    }

    go (item) {
        this.$state.go(item.link);
        this.close();
    }

}

angular.module('suitsIIApp')
  .controller('MenuController', MenuController);
