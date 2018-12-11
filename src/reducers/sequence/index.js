/* @flow */

import * as actionTypes from 'Constants/actionTypes';

const initialState: Object = {
  isSequenceCollapsed: false
};

export default function sequence(state: Object = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.SEQUENCE_COLLAPSE:
      return {
        ...state,
        isSequenceCollapsed: true
      };
    case actionTypes.SEQUENCE_EXPAND:
      return {
        ...state,
        isSequenceCollapsed: false
      };
    default:
      return state;
  }
}
