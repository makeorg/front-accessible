/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';

export function setCustomDataKey(key: string, value: any) {
  return {
    type: actionTypes.CUSTOM_DATA_SET_KEY,
    payload: {
      key,
      value,
    },
  };
}

export function removeCustomDataKey(key: string) {
  return {
    type: actionTypes.CUSTOM_DATA_REMOVE_KEY,
    payload: {
      key,
    },
  };
}
