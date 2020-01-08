// @flow
import { type Dispatch } from 'redux';
import {
  CURRENT_QUESTION_UPDATE,
  PROPOSAL_POPULAR_LOAD,
} from 'Shared/store/actionTypes';
import { type TypeTag } from 'Shared/types/tag';
import { type TypePersonality } from 'Shared/types/user';
import { type PopularProposals } from 'Shared/store/types';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { Logger } from 'Shared/services/Logger';

export const QUESTION_POPULAR_TAGS_LOAD = 'QUESTION_POPULAR_TAGS_LOAD';
export const QUESTION_PERSONALITIES_LOAD = 'QUESTION_PERSONALITIES_LOAD';

export const updateCurrentQuestion = (questionSlug: string) => ({
  type: CURRENT_QUESTION_UPDATE,
  payload: { questionSlug },
});

export const loadPopularTags = (
  questionSlug: string,
  popularTags: TypeTag[]
) => ({
  type: QUESTION_POPULAR_TAGS_LOAD,
  payload: { questionSlug, popularTags },
});

export const fetchPopularTags = (
  questionId: string,
  questionSlug: string,
  limit: ?number = undefined
) => async (dispatch: Dispatch) => {
  try {
    const popularTags = await QuestionApiService.getQuestionPopularTags(
      questionId,
      limit
    );

    return dispatch(loadPopularTags(questionSlug, popularTags));
  } catch (error) {
    return Logger.logError(Error(error));
  }
};

export const loadQuestionPersonalities = (
  questionSlug: string,
  personalities: TypePersonality[]
) => ({
  type: QUESTION_PERSONALITIES_LOAD,
  payload: { questionSlug, personalities },
});

export const fechQuestionPersonalities = (
  questionId: string,
  questionSlug: string,
  personalityRole: ?string = undefined,
  limit: ?number = undefined,
  skip: ?number = undefined
) => async (dispatch: Dispatch) => {
  try {
    const response = await QuestionApiService.getQuestionPersonalities(
      questionId,
      personalityRole,
      limit,
      skip
    );

    return dispatch(loadQuestionPersonalities(questionSlug, response.results));
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
