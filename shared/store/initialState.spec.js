import { initialState } from './initialState';

it('initialState snapshot', () => {
  expect(initialState).toMatchSnapshot();
});
