import app from '../../app';

describe('MainPage controller', () => {
'use strict';
    let MainPageCtrl;

    beforeEach(() => {
        angular.mock.module(app);
        angular.mock.inject(($controller) => {
            MainPageCtrl = $controller('MainPageCtrl');
        });
    });

    it('Should have right title', () => {
        MainPageCtrl.should.exist;
        MainPageCtrl.title.should.be.a('string');
        MainPageCtrl.title.should.equal('Main page');
    });
});