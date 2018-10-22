import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Registration Actions', () => {
  beforeEach(() => {
    store.clearActions();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates PROPOSE_TYPING when calling action', () => {
    const expectedActions = [{
      type: actionTypes.REGISTER_REQUEST
    }];

    store.dispatch(actions.registerRequest());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates REGISTER_SUCCESS when calling action', () => {
    const user = { firstname: 'foo' };
    const expectedActions = [{
      type: actionTypes.REGISTER_SUCCESS,
      user: user
    }];

    store.dispatch(actions.registerSuccess(user));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates REGISTER_FAILURE when calling action', () => {
    const errors = ['fooError'];
    const expectedActions = [{
      type: actionTypes.REGISTER_FAILURE,
      errors
    }];

    store.dispatch(actions.registerFailure(errors));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates an action to register when success', () => {
    const user = {
      email: 'foo@example.com',
      password: 'baz'
     };

     fetchMock
       .post('path:/user',  user)
       .post('path:/oauth/make_access_token', 401);

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_SUCCESS, user },
      { type: actionTypes.LOGIN_REQUEST },
      { type: actionTypes.PANNEL_CLOSE }
    ];

    return store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
  
  it('creates an action to register when failure', () => {
    const user = {
      email: 'foo@example.com',
      password: 'baz'
     };
     const errors = ['fooError'];

     fetchMock
       .post('path:/user',  { body: errors, status: 400 })
       .post('path:/oauth/make_access_token', 401);

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_FAILURE, errors }
    ];

    return store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
});
