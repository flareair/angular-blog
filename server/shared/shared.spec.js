'use strict';

let app = require('../app');
const request = require('supertest');
const expect = require('chai').expect;


describe('Shared router', () => {
    it('should response with default layout on request to root', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('html');
                done();
            });
    });

    it('should response with default layout on request to existing page url', (done) => {
        request(app)
            .get('/about')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('html');
                done();
            });
    });

    it('should response with directive template on request', (done) => {
        request(app)
            .get('/shared/partials/directives/mainmenu.html')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('navbar');
                done();
            });
    });

    it('should render 404 partial', (done) => {
        request(app)
            .get('/shared/partials/404.html')
            .expect(200)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(err).to.equal(null);
                expect(res.text).to.contain('404 Not found');
                done();
            });
    });
});

