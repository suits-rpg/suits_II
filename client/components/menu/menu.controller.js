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
    constructor(Auth, $state, $mdSidenav) {
        console.log('menu auth:', Auth);
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        this.Auth = Auth;
    }

    menus () {
        console.log('getting menus:');
        return menus.filter(item => item.show ? item.show(this.Auth) : true);
    }

    close () {
        this.$mdSidenav('left').close();
    }

    go (item) {
        this.$state.go(item.link);
        this.close();
    }

}

angular.module('suitsIiApp')
  .controller('MenuController', MenuController);
