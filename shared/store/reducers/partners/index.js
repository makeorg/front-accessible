// @flow
import { initialState } from 'Shared/store/initialState';
import { type StatePartners } from 'Shared/store/types';

import * as ActionTypes from './actions';

export function partners(
  state: StatePartners = initialState.partners,
  action: Object
) {
  switch (action.type) {
    case ActionTypes.QUESTION_LOCAL_ACTORS_LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.QUESTION_LOCAL_ACTORS_RESULTS_LOAD:
      return {
        ...state,
        isLoading: false,
        [action.payload.slug]: {
          actors: {
            ...action.payload.actors,
          },
        },
      };

    default:
      return state;
  }
}
