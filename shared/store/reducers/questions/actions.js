// @flow
import { type Dispatch } from 'redux';
import {
  CURRENT_QUESTION_UPDATE,
  PROPOSAL_POPULAR_LOAD,
} from 'Shared/store/actionTypes';
import { type TypeTag } from 'Shared/types/tag';
import { type TypePersonality } from 'Shared/types/user';
import { type PopularProposals } from 'Shared/store/types';
import { QuestionService } from 'Shared/services/Question';
import { ProposalService } from 'Shared/services/Proposal';

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
  const popularTags = await QuestionService.getQuestionPopularTags(
    questionId,
    limit
  );
  if (popularTags) {
    dispatch(loadPopularTags(questionSlug, popularTags));
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
  const response = await QuestionService.getQuestionPersonalities(
    questionId,
    personalityRole,
    limit,
    skip
  );

  const results = response ? response.results : [];
  return dispatch(loadQuestionPersonalities(questionSlug, results));
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
  const popularProposals = await ProposalService.getPopularProposals(
    questionId
  );
  if (popularProposals) {
    dispatch(setPopularProposals(questionSlug, popularProposals));
  }
};
