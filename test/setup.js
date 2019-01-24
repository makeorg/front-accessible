import * as React from 'react'; // eslint-disable-line no-unused-vars

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import ApiService from '../src/api/ApiService';
import 'jest-styled-components'

Enzyme.configure({ adapter: new Adapter() });

require.extensions['.svg'] = () => { };

global.document = new JSDOM('');
global.window = document.defaultView;

global.navigator = { userAgent: 'browser' };
global.React = React;

ApiService.sessionId = 'foo-session';
ApiService.country = 'foo';
ApiService.language = 'foo';
ApiService.source = 'foo';
ApiService.operationId = 'foo';

jest.mock('Services/Trackers/FacebookTracking')
jest.mock('Services/Trackers/TwitterTracking')

function storageMock() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

global.localStorage = storageMock();
