import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  isSequenceCollapsed: false
};

export default function sequence(state = initialState, action) {
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
