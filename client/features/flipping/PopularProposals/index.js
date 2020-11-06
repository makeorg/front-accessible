// @flow
import React, { useEffect, useRef, useState } from 'react';
import { type QuestionType } from 'Shared/types/question';
import { type SliderParamsType } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { PopularProposalCard } from 'Client/features/proposal/PopularProposalCard';
import { useSlider } from 'Client/hooks/useSlider';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { COMPONENT_PARAM_TOP_PROPOSALS } from 'Shared/constants/tracking';
import { ProposalService } from 'Shared/services/Proposal';
import {
  PopularProposalsSliderListStyle,
  PopularProposalsSliderListItemStyle,
  PopularProposalsArrowsStyle,
  PopularProposalsSliderWrapperStyle,
  PopularProposalsSliderListWrapperStyle,
  PopularProposalsSliderTitleStyle,
  PopularProposalsSliderSeparatorStyle,
} from './style';

type Props = {
  question: QuestionType,
  position: number,
  size: number,
};

const sliderName = 'popularProposals';
const sliderParams: SliderParamsType = {
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
  const [proposals, setProposals] = useState([]);
  const hasProposals = proposals && proposals.length > 0;

  const initPopularProposals = async (questionId: string) => {
    const response = await ProposalService.getPopularProposals(questionId);

    if (response) {
      setProposals(response.results);
    }
  };

  useEffect(() => {
    initPopularProposals(question.questionId);
  }, [question.questionId]);

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
          count: proposals.length,
        })}
        <PopularProposalsSliderSeparatorStyle as="span" />
      </PopularProposalsSliderTitleStyle>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <GliderStylesheet />
      <FlexElementStyle as={isMobile ? HiddenItemStyle : FlexElementStyle}>
        <PopularProposalsArrowsStyle
          className={`${sliderName} glider-prev`}
          aria-label={i18n.t('common.slider.previous')}
          aria-controls="popular_proposals_slider_list"
          onClick={() => trackLoadMoreProposals(COMPONENT_PARAM_TOP_PROPOSALS)}
        >
          <SvgArrowLeft aria-hidden focusable="false" />
        </PopularProposalsArrowsStyle>
        <PopularProposalsArrowsStyle
          className={`${sliderName} glider-next`}
          aria-label={i18n.t('common.slider.next')}
          aria-controls="popular_proposals_slider_list"
          onClick={() => trackLoadMoreProposals(COMPONENT_PARAM_TOP_PROPOSALS)}
        >
          <SvgArrowRight aria-hidden focusable="false" />
        </PopularProposalsArrowsStyle>
      </FlexElementStyle>
      <PopularProposalsSliderListWrapperStyle
        className={`${sliderName} glider`}
        id="popular_proposals_slider_list"
        ref={sliderRef}
      >
        <PopularProposalsSliderListStyle
          className={`${sliderName} glider-track`}
        >
          {proposals.map((proposal, index) => (
            <PopularProposalsSliderListItemStyle
              key={proposal.id}
              className={sliderName}
            >
              <PopularProposalCard
                proposal={proposal}
                position={index + 1}
                size={proposals.length}
              />
            </PopularProposalsSliderListItemStyle>
          ))}
        </PopularProposalsSliderListStyle>
      </PopularProposalsSliderListWrapperStyle>
    </PopularProposalsSliderWrapperStyle>
  );
};
