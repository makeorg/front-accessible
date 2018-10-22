import React from 'react'; // eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);

global.document = new JSDOM('');
global.window = document.defaultView;
global.navigator = { userAgent: 'browser' };

global.React = React;
global.expect = expect;

function storageMock() {
  let storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

global.localStorage = storageMock();
