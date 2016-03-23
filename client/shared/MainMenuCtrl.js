'use strict';

export default class MainMenuCtrl {
    constructor($location) {
        this.location = $location;
    }

    isActive(url) {
        // need to improve
        return this.location.path() === url ? 'active' : '';
    }
}

MainMenuCtrl.$inject = ['$location'];