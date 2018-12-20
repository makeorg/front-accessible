/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import SequenceService from 'Api/SequenceService';
import OperationService from 'Api/OperationService';
import Logger from 'Services/Logger';

export const sequenceCollapse = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });
export const sequenceExpand = () => (dispatch: Function) => dispatch({ type: actionTypes.SEQUENCE_EXPAND });

export const fetchQuestionData = (questionSlug: string, country: string, language: string) => (dispatch: Function) => (
  OperationService
    .getOperation(questionSlug, country, language)
    .then((question) => {
      dispatch({ type: actionTypes.QUESTION_LOAD, question });
    })
    .catch((error) => {
      Logger.logError(error);
    })
);

export const fetchQuestionConfigurationData = (questionSlug: String, country: String) => (dispatch: Function) => (
  SequenceService.fetchConfiguration(questionSlug, country)
    .then((questionConfiguration) => {
      dispatch({ type: actionTypes.QUESTION_CONFIGURATION_LOAD, questionConfiguration });
    })
    .catch((error) => {
      console.log(error);
      Logger.logError(error);
    })
);
