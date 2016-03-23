'use strict';

export default function mainMenu() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/mainmenu.html',
        controller: 'MainMenuCtrl',
        controllerAs: 'menu'
    };
}