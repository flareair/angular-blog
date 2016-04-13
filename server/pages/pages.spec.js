'use strict';

let app = require('../app');
const request = require('supertest');
const expect = require('chai').expect;


describe('Pages router', () => {
    it('should return right mainpage partial on request', (done) => {
        request(app)
            .get('/pages/partials/mainpage.html')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('mainpage');
                done();
            });
    });


    it('should return right about page partial on request', (done) => {
        request(app)
            .get('/pages/partials/about.html')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('aboutpage');
                done();
            });
    });
});