// @flow
import { type TypeSliderParams } from 'Shared/types/views';

export const CurrentConsultationSliderParams: TypeSliderParams = {
  type: 'carousel',
  rewind: false,
  perView: 4,
  gap: 30,
  breakpoints: {
    '969': {
      type: 'carousel',
      gap: 15,
      peek: {
        before: 15,
        after: 30,
      },
    },
    '767': {
      type: 'slider',
      perView: 2,
      gap: 10,
      peek: {
        before: 15,
        after: 30,
      },
    },
  },
  peek: {
    before: 0,
    after: 0,
  },
};
