import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SET_COUNTRY_CONFIGURATION,
  SET_DESKTOP_DEVICE,
  SET_MOBILE_DEVICE,
} from 'Shared/store/actionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Modal Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates SET_COUNTRY_CONFIGURATION when calling action', () => {
    const expectedActions = [
      {
        type: SET_COUNTRY_CONFIGURATION,
        payload: { country: 'FR' },
      },
    ];

    store.dispatch(actions.setCountryCode('FR'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SET_DESKTOP_DEVICE when calling action', () => {
    const expectedActions = [
      {
        type: SET_DESKTOP_DEVICE,
      },
    ];

    store.dispatch(actions.setDesktopDevice());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SET_MOBILE_DEVICE when calling action', () => {
    const expectedActions = [
      {
        type: SET_MOBILE_DEVICE,
      },
    ];

    store.dispatch(actions.setMobileDevice());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
