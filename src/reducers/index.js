import { combineReducers } from 'redux';
import appConfig from './appConfig';
import authentification from './authentification';
import proposal from './proposal';

export default combineReducers({
  appConfig,
  authentification,
  proposal
});
