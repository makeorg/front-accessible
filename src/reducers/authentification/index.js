import ApiService from '../../api/ApiService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';

const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY)) : null;
const token = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)) : null;
const initialState = {
  isLoggedIn: (token && user),
  errors: [],
  user,
  token
};
ApiService.token = initialState.token;

export default function authentification(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGIN_SUCCESS:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        errors: []
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: [...[action.error], ...state.errors]
      };
    case actionTypes.GET_INFO:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.LOGIN_SOCIAL_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGIN_SOCIAL_SUCCESS:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        errors: []
      };
    case actionTypes.LOGIN_SOCIAL_FAILURE:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
        errors: []
      };
    default:
      return state;
  }
}
