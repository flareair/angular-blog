'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import sharedRouter from './sharedRouter';
import metaDataService from './metaDataService';
import RootCtrl from './RootCtrl';

export default angular.module('app.shared', [ngRouter])
    .config(sharedRouter)
    .service('metaDataService', metaDataService)
    .controller('RootCtrl' ,RootCtrl)
    .name;