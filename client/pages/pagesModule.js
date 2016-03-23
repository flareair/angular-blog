'use strict';

import angular from 'angular';
import ngRouter from 'angular-route';

import pagesRouter from './pagesRouter';
import MainPageCtrl from './MainPageCtrl';
import AboutPageCtrl from './AboutPageCtrl';

export default angular.module('app.pages', [ngRouter])
    .config(pagesRouter)
    .controller('MainPageCtrl' ,MainPageCtrl)
    .controller('AboutPageCtrl' ,AboutPageCtrl)
    .name;