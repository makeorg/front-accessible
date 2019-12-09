// @flow
import { type Dispatch } from 'redux';
import {
  CURRENT_QUESTION_UPDATE,
  QUESTION_POPULAR_TAGS_LOAD,
} from 'Shared/store/actionTypes';
import { type TypePopularTag } from 'Shared/types/tag';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
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
