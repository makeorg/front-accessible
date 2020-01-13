// @flow
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type Question } from 'Shared/types/question';
import { type TypeSliderParams } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { fetchPopularProposals } from 'Shared/store/reducers/questions/actions';
import {
  type StateRoot,
  type PopularProposals as PopularProposalsType,
} from 'Shared/store/types';
import { PopularProposalCard } from 'Client/features/proposal/PopularProposalCard';
import { useSlider } from 'Client/hooks/useSlider';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  PopularProposalsSliderListItemStyle,
  PopularProposalsSliderListStyle,
  PopularProposalsArrowsStyle,
  PopularProposalsSliderWrapperStyle,
  PopularProposalsSliderTitleStyle,
  PopularProposalsSliderSeparatorStyle,
} from './style';

type Props = {
  question: Question,
  position: number,
  size: number,
};

const sliderName = 'popularProposals';
const sliderParams: TypeSliderParams = {
  slidesToShow: 1.15,
  draggable: true,
  responsive: [
    {
      breakpoint: Breakpoints.LargeMobile,
      settings: {
        slidesToShow: 1.25,
        draggable: true,
      },
    },
    {
      breakpoint: Breakpoints.Tablet,
      settings: {
        slidesToShow: 2.25,
        draggable: true,
      },
    },
    {
      breakpoint: Breakpoints.Desktop,
      settings: {
        slidesToShow: 2.5,
        draggable: true,
      },
    },
  ],
  interactiveChildren: {
    links: true,
    buttons: true,
  },
  arrows: {
    prev: `.${sliderName}.glider-prev`,
    next: `.${sliderName}.glider-next`,
  },
};

export const PopularProposals = ({ question, position, size }: Props) => {
  const sliderRef = useRef();
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const proposals: PopularProposalsType = useSelector(
    (state: StateRoot) => state.questions[question.slug].popularProposals
  );

  useEffect(() => {
    dispatch(fetchPopularProposals(question.questionId, question.slug));
  }, [dispatch, question.questionId]);

  const hasProposals = proposals && proposals.results.length > 0;

  useSlider(sliderRef, sliderParams, hasProposals);

  if (!hasProposals) {
    return null;
  }

  return (
    <PopularProposalsSliderWrapperStyle
      aria-posinset={position}
      aria-setsize={size}
      className={`${sliderName} glider-contain`}
    >
      <PopularProposalsSliderTitleStyle as="h3">
        {i18n.t('consultation.popular_proposals.title', {
          count: proposals.results.length,
        })}
        <PopularProposalsSliderSeparatorStyle />
      </PopularProposalsSliderTitleStyle>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <GliderStylesheet />
      <FlexElementStyle as={isMobile ? HiddenItemStyle : FlexElementStyle}>
        <PopularProposalsArrowsStyle
          className={`${sliderName} glider-prev`}
          aria-label={i18n.t('common.slider.previous')}
          aria-controls="glide_translator"
          direction="left"
        >
          <SvgArrowLeft aria-hidden />
        </PopularProposalsArrowsStyle>
        <PopularProposalsArrowsStyle
          className={`${sliderName} glider-next`}
          aria-label={i18n.t('common.slider.next')}
          aria-controls="glide_translator"
          direction="right"
        >
          <SvgArrowRight aria-hidden />
        </PopularProposalsArrowsStyle>
      </FlexElementStyle>
      <div className={`${sliderName} glider`} ref={sliderRef}>
        <PopularProposalsSliderListStyle
          className={`${sliderName} glider-track`}
        >
          {proposals.results.map((proposal, index) => (
            <PopularProposalsSliderListItemStyle
              key={proposal.id}
              className={sliderName}
            >
              <PopularProposalCard
                proposal={proposal}
                position={index + 1}
                size={proposals.results.length}
              />
            </PopularProposalsSliderListItemStyle>
          ))}
        </PopularProposalsSliderListStyle>
      </div>
    </PopularProposalsSliderWrapperStyle>
  );
};
