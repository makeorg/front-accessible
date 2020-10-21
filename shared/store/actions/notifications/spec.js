import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Notification Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates CLOSE_NOTIFICATION_BANNER when calling action', () => {
    const expectedActions = [{ type: actionTypes.CLOSE_NOTIFICATION_BANNER }];

    store.dispatch(actions.clearNotificationBanner());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
