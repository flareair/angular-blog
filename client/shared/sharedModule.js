'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import sharedRouter from './sharedRouter';

import metaDataService from './services/metaDataService';
import menuService from './services/menuService';

import RootCtrl from './controllers/RootCtrl';
import MainMenuCtrl from './controllers/MainMenuCtrl';

import mainMenu from './directives/mainMenuDirective';

export default angular.module('app.shared', [ngRouter])
    .config(sharedRouter)
    .service('metaDataService', metaDataService)
    .service('menuService', menuService)
    .controller('RootCtrl' ,RootCtrl)
    .controller('MainMenuCtrl' ,MainMenuCtrl)
    .directive('mainMenu' ,mainMenu)
    .name;