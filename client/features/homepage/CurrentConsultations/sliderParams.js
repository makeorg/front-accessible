// @flow
import { type TypeSliderParams } from 'Shared/types/views';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const CURRENT_CONSULTATION_SLIDER: string = 'consultation';
export const CurrentConsultationSliderParams: TypeSliderParams = {
  slidesToShow: 1.5,
  responsive: [
    {
      breakpoint: Breakpoints.Tablet,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: {
          prev: `.${CURRENT_CONSULTATION_SLIDER}.glider-prev`,
          next: `.${CURRENT_CONSULTATION_SLIDER}.glider-next`,
        },
      },
    },
    {
      breakpoint: Breakpoints.Desktop,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: {
          prev: `.${CURRENT_CONSULTATION_SLIDER}.glider-prev`,
          next: `.${CURRENT_CONSULTATION_SLIDER}.glider-next`,
        },
      },
    },
  ],
  interactiveChildren: {
    inputs: true,
  },
};
