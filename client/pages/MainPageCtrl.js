'use strict';

export default class MainPageCtrl {
    constructor(metaDataService) {
        this.title = 'Main page';
        metaDataService.setPageTitle(this.title);
    }
}

MainPageCtrl.$inject = ['metaDataService'];