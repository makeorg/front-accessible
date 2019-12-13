// @flow
import { type Dispatch } from 'redux';
import {
  CURRENT_QUESTION_UPDATE,
  QUESTION_POPULAR_TAGS_LOAD,
  PROPOSAL_POPULAR_LOAD,
} from 'Shared/store/actionTypes';
import { type TypePopularTag } from 'Shared/types/tag';
import { type PopularProposals } from 'Shared/store/types';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { Logger } from 'Shared/services/Logger';

export const updateCurrentQuestion = (questionSlug: string) => ({
  type: CURRENT_QUESTION_UPDATE,
  payload: { questionSlug },
});

export const loadPopularTags = (
  questionSlug: string,
  popularTags: TypePopularTag[]
) => ({
  type: QUESTION_POPULAR_TAGS_LOAD,
  payload: { questionSlug, popularTags },
});

export const fetchPopularTags = (
  questionId: string,
  questionSlug: string
) => async (dispatch: Dispatch) => {
  try {
    const popularTags = await QuestionApiService.getQuestionPopularTags(
      questionId
    );

    return dispatch(loadPopularTags(questionSlug, popularTags));
  } catch (error) {
    return Logger.logError(Error(error));
  }
};

export const setPopularProposals = (
  questionSlug: string,
  popularProposals: PopularProposals
) => ({
  type: PROPOSAL_POPULAR_LOAD,
  payload: { questionSlug, popularProposals },
});

export const fetchPopularProposals = (
  questionId: string,
  questionSlug: string
) => async (dispatch: Dispatch) => {
  try {
    const popularProposals = await ProposalApiService.getPopularProposals(
      questionId
    );
    dispatch(setPopularProposals(questionSlug, popularProposals));
  } catch (error) {
    Logger.logError(Error(error));
  }
};
