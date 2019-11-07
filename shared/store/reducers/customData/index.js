// @flow

import * as actionTypes from 'Shared/store/actionTypes';

export function customData(state: Object = {}, action: Object) {
  switch (action.type) {
    case actionTypes.CUSTOM_DATA_SET_KEY:
      return { ...state, [action.payload.key]: action.payload.value };
    case actionTypes.CUSTOM_DATA_REMOVE_KEY: {
      const stateCopy = { ...state };
      delete stateCopy[action.payload.key];
      return stateCopy;
    }
    default:
      return state;
  }
}