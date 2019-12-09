// @flow
import { Dispatch } from 'redux';

import { type StateActors, type StateRoot } from 'Shared/store/types';
import { QuestionApiService } from 'Shared/api/QuestionApiService';

export const QUESTION_LOCAL_ACTORS_LOAD = 'QUESTION_LOCAL_ACTORS_LOAD';
export const QUESTION_LOCAL_ACTORS_RESULTS_LOAD =
  'QUESTION_LOCAL_ACTORS_RESULTS_LOAD';

export const loadLocalActors = () => ({
  type: QUESTION_LOCAL_ACTORS_LOAD,
});

export const setLocalActors = (slug: string, actors: StateActors) => ({
  type: QUESTION_LOCAL_ACTORS_RESULTS_LOAD,
  payload: { slug, actors },
});

export const getLocalActors = (
  questionId: string,
  slug: string,
  limit: ?number,
  skip: ?number,
  sortAlgorithm: string = 'participation'
) => async (dispatch: Dispatch) => {
  dispatch(loadLocalActors());
  const actors = await QuestionApiService.getQuestionPartners(
    questionId,
    limit,
    skip,
    sortAlgorithm
  );
  dispatch(setLocalActors(slug, actors));
};

export const loadMoreLocalActors = (
  questionId: string,
  slug: string,
  limit: ?number,
  skip: ?number,
  sortAlgorithm: string = 'participation'
) => async (dispatch: Dispatch, getState: () => StateRoot) => {
  dispatch(loadLocalActors());
  const { results } = getState().partners[slug].actors;
  const actors = await QuestionApiService.getQuestionPartners(
    questionId,
    limit,
    skip,
    sortAlgorithm
  );
  dispatch(
    setLocalActors(slug, {
      total: actors.total,
      results: [...results, ...actors.results],
    })
  );
};
