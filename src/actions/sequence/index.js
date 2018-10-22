import * as actionTypes from '../../constants/actionTypes';

export const sequenceCollapse = () => dispatch => dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });
export const sequenceExpand = () => dispatch => dispatch({ type: actionTypes.SEQUENCE_EXPAND });
