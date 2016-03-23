'use strict';

import './main.less';

import angular from 'angular';
import ngRouter from 'angular-route';
import routing from './routing';

import RootCtrl from './shared/RootCtrl';
import metaDataService from './shared/metaDataService';

import pages from './pages/pages';


angular.module('app', [ngRouter, pages])
    .service('metaDataService', metaDataService)
    .controller('RootCtrl', RootCtrl)
    .config(routing);
