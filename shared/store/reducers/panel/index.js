// @flow
import { initialState } from 'Shared/store/initialState';
import { type StatePanel } from 'Shared/store/types';
import {
  PANEL_OPEN,
  PANEL_CLOSE,
  PANEL_SET_CONTENT,
  PANEL_REMOVE_CONTENT,
} from './actions';

export function panel(state: StatePanel = initialState.panel, action: Object) {
  switch (action.type) {
    case PANEL_OPEN:
      return {
        ...state,
        isExpanded: true,
      };
    case PANEL_CLOSE:
      return {
        ...state,
        isExpanded: false,
      };
    case PANEL_SET_CONTENT:
      return {
        ...state,
        isExpanded: true,
        panelContent: action.payload.panelContent,
      };
    case PANEL_REMOVE_CONTENT:
      return {
        ...state,
        panelContent: undefined,
      };
    default:
      return state;
  }
}
