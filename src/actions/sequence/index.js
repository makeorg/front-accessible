/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import type { QuestionConfiguration } from 'Types/sequence';
import type { DispatchString } from 'Types/dispatch';
import SequenceService from 'Api/SequenceService';
import QuestionService from 'Api/QuestionService';
import Logger from 'Services/Logger';
import Tracking from 'Services/Tracking';

export const sequenceCollapse = () => (
  dispatch: (DispatchString) => void
) => dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });

export const sequenceExpand = () => (
  dispatch: (DispatchString) => void
) => dispatch({ type: actionTypes.SEQUENCE_EXPAND });

export const voteProposal = (proposalId: string) => (
  { type: actionTypes.SEQUENCE_PROPOSAL_VOTE, payload: { proposalId } }
);

export const unvoteProposal = (proposalId: string) => (
  { type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE, payload: { proposalId } }
);

export const loadQuestion = (question: any) => (
  { type: actionTypes.QUESTION_LOAD, payload: { question } }
);

export const loadQuestionConfiguration = (questionConfiguration: QuestionConfiguration) => (
  { type: actionTypes.QUESTION_CONFIGURATION_LOAD, payload: { questionConfiguration } }
);

export const sequenceVote = (
  proposalId: string,
  voteKey: string,
  index: number
) => (dispatch: (any) => void, getState: () => any) => {
  const { votedProposalIds, question } = getState().sequence;
  const isFirstVote = votedProposalIds.length === 0;
  dispatch(voteProposal(proposalId));

  if (isFirstVote) {
    Tracking.trackFirstVote(question.slug, proposalId, voteKey, index);
  }

  Tracking.trackVote(question.slug, proposalId, voteKey, index);
};

export const sequenceUnvote = (
  proposalId: string,
  voteKey: string,
  index: number
) => (dispatch: (any) => void) => {
  dispatch(unvoteProposal(proposalId));

  Tracking.trackUnvote(proposalId, voteKey, index);
};

export const fetchQuestionData = (
  questionSlug: string
) => (dispatch: (any) => void) => (
  QuestionService
    .getDetail(questionSlug)
    .then((question) => {
      dispatch(loadQuestion(question));
    })
    .catch((error) => {
      Logger.logError({ ...{ source: 'fetchQuestionData api call error' }, ...error });
    })
);

export const fetchQuestionConfigurationData = (
  questionSlug: string
) => (dispatch: (any) => void) => (
  SequenceService.fetchConfiguration(questionSlug)
    .then((questionConfiguration) => {
      dispatch(loadQuestionConfiguration(questionConfiguration));
    })

    .catch((error) => {
      Logger.logError({ ...{ source: 'fetchQuestionConfigurationData api call error' }, ...error });
    })
);
