'use strict';

const assert = require('chai').assert;
const store = require('../index');

const validApp = {
  appId: 'com.vizorapps.klondike.am',
  title: 'Klondike Adventures',
};
const invalidApp = {
  appId: '1299192dki1id9o0akodklmsa',
  title: 'Invalid App',
};

describe('App method', () => {
  it('should fetch valid application data', () => {
    return store.app({appId: validApp.appId})
      .then((app) => {
        assert.equal(app.id, validApp.appId);
        assert.include(app.title, validApp.title);
      });
  });

  it('should return null for invalid app', () => {
    return store.app({id: invalidApp})
      .then((app) => {
        assert.isNull(app);
      });
  });
});
