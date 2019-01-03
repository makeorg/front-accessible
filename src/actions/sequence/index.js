/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import SequenceService from 'Api/SequenceService';
import OperationService from 'Api/OperationService';
import Logger from 'Services/Logger';

export const sequenceCollapse = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });
export const sequenceExpand = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_EXPAND });

export const sequenceVote = (proposalId: string) => (dispatch: Function) => (
  dispatch({ type: actionTypes.SEQUENCE_PROPOSAL_VOTE, proposalId })
);
export const sequenceUnvote = (proposalId: string) => (dispatch: Function) => (
  dispatch({ type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE, proposalId })
);

export const fetchQuestionData = (questionSlug: string, country: string, language: string) => (dispatch: Function) => (
  OperationService
    .getOperation(questionSlug, country, language)
    .then((question) => {
      dispatch({ type: actionTypes.QUESTION_LOAD, question });
    })
    .catch((error) => {
      Logger.logError({ ...{ source: 'fetchQuestionData api call error' }, ...error });
    })
);

export const fetchQuestionConfigurationData = (questionSlug: string, country: string) => (dispatch: Function) => (
  SequenceService.fetchConfiguration(questionSlug, country)
    .then((questionConfiguration) => {
      dispatch({ type: actionTypes.QUESTION_CONFIGURATION_LOAD, questionConfiguration });
    })
    .catch((error) => {
      Logger.logError({ ...{ source: 'fetchQuestionConfigurationData api call error' }, ...error });
    })
);
