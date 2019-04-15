import { type StateRoot } from '../types';
/**
 * Config selector
 * @param {*} state
 */
export const selectConfig = (state: StateRoot) => state.appConfig;
