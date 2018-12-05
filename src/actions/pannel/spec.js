/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';
import { API_URL } from '../../api/ApiService';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Pannel Actions', () => {
  beforeEach(() => {
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  it('Creates PANNEL_CLOSE when calling action', () => {
    const expectedActions = [
      { type: actionTypes.PANNEL_CLOSE },
      { type: actionTypes.FORGOT_PASSWORD_INIT }
    ];

    axiosMock.onPost(`/tracking/front`).reply(204);
    store.dispatch(actions.pannelClose());

    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates PANNEL_SHOW_LOGIN when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_LOGIN,
    }];

    store.dispatch(actions.pannelShowLogin());

    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates PANNEL_SHOW_REGISTER when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_REGISTER,
    }];

    store.dispatch(actions.pannelShowRegister());

    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates PANNEL_SHOW_FORGOT_PASSWORD when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD,
    }];

    store.dispatch(actions.pannelShowForgotPassword());

    expect(store.getActions()).to.deep.equal(expectedActions)
  });
});
