// @flow
import { Dispatch } from 'redux';

import { type StateActor } from 'Shared/store/types';
import { QuestionApiService } from 'Shared/api/QuestionApiService';

export const QUESTION_LOCAL_ACTORS_LOAD = 'QUESTION_LOCAL_ACTORS_LOAD';
export const QUESTION_LOCAL_ACTORS_RESULTS_LOAD =
  'QUESTION_LOCAL_ACTORS_RESULTS_LOAD';

export const loadLocalActors = () => ({
  type: QUESTION_LOCAL_ACTORS_LOAD,
});

export const setLocalActors = (slug: string, actors: StateActor[]) => ({
  type: QUESTION_LOCAL_ACTORS_RESULTS_LOAD,
  payload: { slug, actors },
});

export const getLocalActors = (questionId: string, slug: string) => async (
  dispatch: Dispatch
) => {
  dispatch(loadLocalActors());
  const actors = await QuestionApiService.getQuestionPartners(questionId);
  dispatch(setLocalActors(slug, actors));
};
