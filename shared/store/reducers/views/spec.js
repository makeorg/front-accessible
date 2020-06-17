// @flow
import homepageFixture from '../../../../apiMocks/db/views.json';
import { views } from './index';
import { loadHomepage } from './actions';

// todo refactor when deprecated datas for homepage will be remmoved
const homepageData = homepageFixture.home;

describe('Homepage reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {};
    expect(views(undefined, {})).toEqual(expectedState);
  });

  it('Return Homepage', () => {
    const previousState = {};
    const expectedState = { homepage: homepageData };
    const action = loadHomepage(homepageData);
    expect(views(previousState, action)).toEqual(expectedState);
  });
});
