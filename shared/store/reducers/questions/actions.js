// @flow
import { type Dispatch } from 'redux';
import { CURRENT_QUESTION_UPDATE } from 'Shared/store/actionTypes';
import { type TagType } from 'Shared/types/tag';
import { type PersonalityType } from 'Shared/types/user';
import { QuestionService } from 'Shared/services/Question';

export const QUESTION_POPULAR_TAGS_LOAD = 'QUESTION_POPULAR_TAGS_LOAD';
export const QUESTION_PERSONALITIES_LOAD = 'QUESTION_PERSONALITIES_LOAD';

export const updateCurrentQuestion = (questionSlug: string) => ({
  type: CURRENT_QUESTION_UPDATE,
  payload: { questionSlug },
});

export const loadPopularTags = (
  questionSlug: string,
  popularTags: TagType[]
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
  personalities: PersonalityType[]
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
