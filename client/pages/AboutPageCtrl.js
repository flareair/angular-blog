'use strict';

export default class AboutPageCtrl {
    constructor(metaDataService) {
        this.title = 'About page';
        metaDataService.setPageTitle(this.title);
    }
}

AboutPageCtrl.$inject = ['metaDataService'];