// @flow
import { type Dispatch } from 'redux';
import { type TagType } from 'Shared/types/tag';
import { type PersonalityType } from 'Shared/types/user';
import { QuestionService } from 'Shared/services/Question';

export const LOAD_QUESTION = 'LOAD_QUESTION';
export const QUESTION_POPULAR_TAGS_LOAD = 'QUESTION_POPULAR_TAGS_LOAD';
export const QUESTION_PERSONALITIES_LOAD = 'QUESTION_PERSONALITIES_LOAD';

export const loadQuestion = (question: QuestionType) => ({
  type: LOAD_QUESTION,
  payload: { question },
});

export const loadPopularTags = (
  questionSlug: string,
  popularTags: TagType[]
) => ({
  type: QUESTION_POPULAR_TAGS_LOAD,
  payload: { questionSlug, popularTags },
});

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
