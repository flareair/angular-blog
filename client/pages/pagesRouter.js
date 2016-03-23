'use strict';

pagesRouter.$inject = ['$routeProvider'];

export default function pagesRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/mainpage.html',
            controller: 'MainPageCtrl',
            controllerAs: 'mainpage',
        })
        .when('/about', {
            templateUrl: '/partials/about.html',
            controller: 'AboutPageCtrl',
            controllerAs: 'aboutpage',
        });
}