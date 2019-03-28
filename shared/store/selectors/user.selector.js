import { type StateRoot } from '../types';
/**
 * authentification selector
 * @param {*} state
 */
export const selectAuthentification = (state: StateRoot) =>
  state.user.authentification;

/**
 * registration selector
 * @param {*} state
 */
export const selectRegistration = (state: StateRoot) => state.user.registration;

/**
 * forgotPassword selector
 * @param {*} state
 */
export const selectForgotPassword = (state: StateRoot) =>
  state.user.forgotPassword;

/**
 * passwordRecovery selector
 * @param {*} state
 */
export const selectPasswordRecovery = (state: StateRoot) =>
  state.user.passwordRecovery;
