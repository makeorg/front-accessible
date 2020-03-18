// @flow
import { Dispatch } from 'redux';

import { type StateActors, type StateRoot } from 'Shared/store/types';
import { QuestionService } from 'Shared/services/Question';
import { ACTOR_PARTNER } from 'Shared/constants/partner';

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
  partnerKind?: string = ACTOR_PARTNER,
  sortAlgorithm?: string = 'participation',
  limit?: number,
  skip?: number
) => async (dispatch: Dispatch) => {
  dispatch(loadLocalActors());
  const actors = await QuestionService.getQuestionPartners(
    questionId,
    partnerKind,
    sortAlgorithm,
    limit,
    skip
  );
  if (actors) {
    dispatch(setLocalActors(slug, actors));
  }
};

export const loadMoreLocalActors = (
  questionId: string,
  slug: string,
  partnerKind?: string = ACTOR_PARTNER,
  sortAlgorithm?: string = 'participation',
  limit?: number,
  skip?: number
) => async (dispatch: Dispatch, getState: () => StateRoot) => {
  dispatch(loadLocalActors());
  const { results } = getState().partners[slug].actors;
  const actors = await QuestionService.getQuestionPartners(
    questionId,
    partnerKind,
    sortAlgorithm,
    limit,
    skip
  );
  if (actors) {
    dispatch(
      setLocalActors(slug, {
        total: actors.total,
        results: [...results, ...actors.results],
      })
    );
  }
};
