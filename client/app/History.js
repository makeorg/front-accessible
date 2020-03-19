// @flow
import { createBrowserHistory } from 'history';
import { unloadCurrentQuestion } from 'Shared/store/actions/sequence';
import { Store } from 'redux';

export const history = createBrowserHistory();

export const initHistory = (store: Store) => {
  history.listen(location => {
    store.dispatch(unloadCurrentQuestion());
    if (location.pathname === '/soon' && window) {
      window.location.reload();
    }
  });
};
