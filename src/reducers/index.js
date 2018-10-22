import { combineReducers } from 'redux';
import appConfig from './appConfig';
import authentification from './authentification';
import registration from './registration';
import proposal from './proposal';
import pannel from './pannel';
import sequence from './sequence';

export default combineReducers({
  appConfig,
  authentification,
  registration,
  proposal,
  pannel,
  sequence
});
