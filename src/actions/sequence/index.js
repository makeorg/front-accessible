/* @flow */

import * as actionTypes from '../../constants/actionTypes';

export const sequenceCollapse = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });
export const sequenceExpand = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_EXPAND });
