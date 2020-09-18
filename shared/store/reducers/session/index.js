// @flow

import { SET_SESSION_ID } from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateSession } from 'Shared/store/types';

export function session(
  state: StateSession = initialState.session,
  action: Object
) {
  switch (action.type) {
    case SET_SESSION_ID:
      return {
        ...state,
        sessionId: action.payload.sessionId,
      };
    default:
      return state;
  }
}
