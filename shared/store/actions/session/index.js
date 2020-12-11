/* @flow */

import { SET_SESSION_ID } from 'Shared/store/actionTypes';

export const updateSessionId = (sessionId: string) => (dispatch: Function) => {
  dispatch({ type: SET_SESSION_ID, payload: { sessionId } });
};

export const clearSessionId = () => (dispatch: Function) => {
  dispatch({ type: SET_SESSION_ID, payload: { sessionId: '' } });
};
