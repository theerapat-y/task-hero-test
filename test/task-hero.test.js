'use strict';
let debug = require('debug')('task-hero:test');
let co = require('co');
let supertest = require('supertest');
let testServer = require('./lib/test-server');

describe('Smoke run api test', () => {
    after((done)=>{
        co(function *(){
            try {
                yield testServer.shutdown();
                done();
            } catch(e){
                done(e);
            }
        });
    });

    it('The app should run OK!', (done) => {
        testServer.request.get('/').expect(200).end((err, res) => {
            done(err);
        });
    });

    it('Add more test..', (done) => {
        done();
    });
});
