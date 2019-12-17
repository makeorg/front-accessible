// @flow
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { type Question } from 'Shared/types/question';
import { type TypeSliderParams } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { fetchPopularProposals } from 'Shared/store/actions/question';
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
import { ProposalsSliderWrapperStyle } from 'Client/features/homepage/Proposals/Styled';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { useMobile } from 'Client/hooks/useMedia';
import {
  PopularProposalsSliderListItemStyle,
  PopularProposalsSliderListStyle,
  ArrowStyle,
} from './style';

type Props = {
  question: Question,
};

const sliderName = 'popularProposals';
const sliderParams: TypeSliderParams = {
  slidesToShow: 1.5,
  responsive: [
    {
      breakpoint: Breakpoints.Tablet,
      settings: {
        slidesToShow: 2.5,
      },
    },
  ],
  draggable: true,
  interactiveChildren: {
    links: true,
    buttons: true,
  },
  arrows: {
    prev: `.${sliderName}.glider-prev`,
    next: `.${sliderName}.glider-next`,
  },
};

export const PopularProposals = ({ question }: Props) => {
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
    <TileWithTitle
      title={i18n.t('consultation.popular_proposals.title', {
        count: proposals.results.length,
      })}
      style={{
        backgroundColor: BackgroundColors.ExtraLightGrey,
        marginTop: '15px',
      }}
    >
      <ProposalsSliderWrapperStyle className={`${sliderName} glider-contain`}>
        <GliderStylesheet />
        <FlexElementStyle as={isMobile ? HiddenItemStyle : FlexElementStyle}>
          <ArrowStyle
            className={`${sliderName} glider-prev`}
            aria-label={i18n.t('common.slider.previous')}
            aria-controls="glide_translator"
            direction="left"
          >
            <SvgArrowLeft aria-hidden />
          </ArrowStyle>
          <ArrowStyle
            className={`${sliderName} glider-next`}
            aria-label={i18n.t('common.slider.next')}
            aria-controls="glide_translator"
            direction="right"
          >
            <SvgArrowRight aria-hidden />
          </ArrowStyle>
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
      </ProposalsSliderWrapperStyle>
    </TileWithTitle>
  );
};
