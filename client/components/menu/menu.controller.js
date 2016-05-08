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

    isCollapsed = true;
    //end-non-standard

    constructor(Auth, $state) {
        console.log('menu auth:', Auth);
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.menu = menus.filter(item => item.show ? item.show(Auth) : true);
        this.go = (item) => $state.go(item.link);
    }
}

angular.module('suitsIiApp')
  .controller('MenuController', MenuController);
