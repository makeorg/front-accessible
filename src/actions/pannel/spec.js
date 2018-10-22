import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Pannel Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('creates PANNEL_CLOSE when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_CLOSE,
    }];

    store.dispatch(actions.pannelClose());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates PANNEL_SHOW_LOGIN when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_LOGIN,
    }];

    store.dispatch(actions.pannelShowLogin());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates PANNEL_SHOW_REGISTER when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_REGISTER,
    }];

    store.dispatch(actions.pannelShowRegister());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates PANNEL_SHOW_FORGOT_PASSWORD when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD,
    }];

    store.dispatch(actions.pannelShowForgotPassword());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });
});
