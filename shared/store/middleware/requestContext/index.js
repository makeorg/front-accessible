// @flow

import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { Store, Dispatch, Action } from 'redux';
import {
  CUSTOM_DATA_SET_KEY,
  CUSTOM_DATA_REMOVE_KEY,
} from 'Shared/store/actionTypes';
import * as customDataHelper from 'Client/helper/customData';
import {
  addValueAndGetCustomData,
  removeKeyAndGetCustomData,
} from 'Shared/store/reducers/customData';

export const updateRequestContextCustomData = (customData: Object) => {
  apiClient.customData = customDataHelper.formatdDataForHeader(customData);
};

export const requestContext =
  (store: Store) => (next: Dispatch) => (action: Action) => {
    const state = store.getState();

    switch (action.type) {
      case CUSTOM_DATA_SET_KEY: {
        const customDataUpdated = addValueAndGetCustomData(
          state.customData,
          action.payload.key,
          action.payload.value
        );
        updateRequestContextCustomData(customDataUpdated);
        customDataHelper.saveAll(customDataUpdated);
        return next(action);
      }

      case CUSTOM_DATA_REMOVE_KEY: {
        const customDataUpdated = removeKeyAndGetCustomData(
          state.customData,
          action.payload.key
        );
        updateRequestContextCustomData(customDataUpdated);
        customDataHelper.saveAll(customDataUpdated, false);
        return next(action);
      }

      default:
        return next(action);
    }
  };
