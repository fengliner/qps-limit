'use strict';

const assert = require('power-assert');
const express = require('express');
const supertest = require('supertest');
const qps = require('../lib');

/* -------------------------------------------------------------------------- */

let app = express();
app.use(qps({limit: 100}));
app.get('/', function (req, res, next) {
  res.send('hello world');
});

/* -------------------------------------------------------------------------- */

describe('qps-limit', function () {
  it('should return right data when qps limit is not reached', function (done) {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        assert(res.text === 'hello world');
        done();
      });
  });
});