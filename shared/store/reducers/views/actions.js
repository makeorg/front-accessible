// @flow
import { type HomeViewType } from 'Shared/types/views';

export const LOAD_HOMEPAGE = 'LOAD_HOMEPAGE';
export const FETCH_HOMEPAGE = 'FETCH_HOMEPAGE';

export const loadHomepage = (homepage: HomeViewType) => ({
  type: LOAD_HOMEPAGE,
  payload: { homepage },
});
