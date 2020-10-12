// @flow
import { createBrowserHistory } from 'history';
import { unloadCurrentQuestion } from 'Shared/store/actions/sequence';
import { Store } from 'redux';

export const history = createBrowserHistory();

export const initHistory = (store: Store) => {
  history.listen(() => {
    store.dispatch(unloadCurrentQuestion());
  });
};
