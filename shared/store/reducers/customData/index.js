// @flow

import * as actionTypes from 'Shared/store/actionTypes';

export const addValueAndGetCustomData = (
  customDataObject: Object,
  key: string,
  value: string
) => ({
  ...customDataObject,
  [key]: value,
});

export const removeKeyAndGetCustomData = (
  customDataObject: Object,
  key: string
) => {
  const stateCopy = { ...customDataObject };
  delete stateCopy[key];
  return stateCopy;
};

export function customData(state: Object = {}, action: Object) {
  switch (action.type) {
    case actionTypes.CUSTOM_DATA_SET_KEY:
      return addValueAndGetCustomData(
        state,
        action.payload.key,
        action.payload.value
      );
    case actionTypes.CUSTOM_DATA_REMOVE_KEY: {
      return removeKeyAndGetCustomData(state, action.payload.key);
    }
    default:
      return state;
  }
}
