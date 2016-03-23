'use strict';

import './main.less';

import angular from 'angular';
import ngRouter from 'angular-route';


import pages from './pages/pagesModule';
import shared from './shared/sharedModule';


angular.module('app', [
    ngRouter,
    shared,
    pages
]);
