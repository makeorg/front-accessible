/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { Logger } from 'Shared/services/Logger';
import { trackFirstVote } from 'Shared/services/Tracking';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';

export const sequenceCollapse = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });

export const sequenceStart = (questionSlug: string) => ({
  type: actionTypes.SEQUENCE_START,
  payload: { questionSlug },
});

export const voteProposal = (proposalId: string, questionSlug: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
  payload: { proposalId, questionSlug },
});

export const unvoteProposal = (proposalId: string, questionSlug: string) => ({
  type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
  payload: { proposalId, questionSlug },
});

export const loadQuestion = (question: TypeQuestion) => ({
  type: actionTypes.QUESTION_LOAD,
  payload: { question },
});

export const unloadCurrentQuestion = () => ({
  type: actionTypes.QUESTION_UNLOAD,
});

export const loadQuestionResults = (
  questionResults: TypeQuestionResults,
  questionSlug: string
) => ({
  type: actionTypes.QUESTION_RESULTS_LOAD,
  payload: { questionResults, questionSlug },
});

export const sequenceVote = (
  proposalId: string,
  questionSlug: string,
  voteKey: string,
  index: number
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  const { votedProposalIds } = getState().sequence;
  const proposalIds = votedProposalIds[questionSlug] || [];
  const isFirstVote = proposalIds.length === 0;
  dispatch(voteProposal(proposalId, questionSlug));

  if (isFirstVote) {
    trackFirstVote(proposalId, voteKey, index);
  }
};

export const sequenceUnvote = (proposalId: string, questionSlug: string) => (
  dispatch: any => void
) => {
  dispatch(unvoteProposal(proposalId, questionSlug));
};

export const fetchQuestionData = (questionSlugOrId: string) => (
  dispatch: any => void
) =>
  QuestionApiService.getDetail(questionSlugOrId)
    .then(question => {
      dispatch(loadQuestion(question));

      // Important ! Do not remove: use by the parent to use question.questionId
      return question;
    })
    .catch(error => {
      Logger.logError(Error(error));
    });

export const fetchQuestionResults = (questionSlug: string) => (
  dispatch: any => void
) =>
  QuestionNodeService.fetchResults(questionSlug)
    .then(questionResults => {
      dispatch(loadQuestionResults(questionResults, questionSlug));
    })
    .catch(error => {
      Logger.logError(Error(error));
    });
