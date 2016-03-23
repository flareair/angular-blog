'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import sharedRouter from './sharedRouter';
import metaDataService from './metaDataService';
import RootCtrl from './RootCtrl';
import MainMenuCtrl from './MainMenuCtrl';

export default angular.module('app.shared', [ngRouter])
    .config(sharedRouter)
    .service('metaDataService', metaDataService)
    .controller('RootCtrl' ,RootCtrl)
    .controller('MainMenuCtrl' ,MainMenuCtrl)
    .name;