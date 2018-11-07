import ApiService from '../../api/ApiService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';

const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY)) : null;
const token = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)) : null;

const initialState = {
  isLoggedIn: (token !== null && user !== null),
  errors: [],
  token,
  user
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
        isLoggedIn: true,
        user: action.user
      };
    case actionTypes.GET_TOKEN:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token
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
        user: null,
        token: null,
        errors: []
      };
    default:
      return state;
  }
}
