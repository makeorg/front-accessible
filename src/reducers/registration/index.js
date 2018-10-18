import * as actionTypes from '../../constants/actionTypes';

export default function registration(state = { user: null, errors: [] }, action) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        errors: []
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
}
