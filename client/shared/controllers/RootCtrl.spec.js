import app from '../../app';

describe('Root controller', () => {
'use strict';
    let RootCtrl;

    beforeEach(() => {
        angular.mock.module('app');
        angular.mock.inject(($controller) => {
            RootCtrl = $controller('RootCtrl');
        });
    });

    it('Should have right metadata property', () => {
        RootCtrl.metaData.should.exist;
        RootCtrl.metaData.should.be.an('object');
    });
});