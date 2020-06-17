// @flow
import { initialState } from 'Shared/store/initialState';
import { type StateViews } from 'Shared/store/types';
import { LOAD_HOMEPAGE } from './actions';

export function views(state: StateViews = initialState.views, action: Object) {
  switch (action.type) {
    case LOAD_HOMEPAGE:
      return {
        ...state,
        homepage: action.payload.homepage,
      };
    default:
      return state;
  }
}
