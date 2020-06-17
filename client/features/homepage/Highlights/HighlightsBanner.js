// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type HomeHighlightsType } from 'Shared/types/views';
import { SvgHandHeart, SvgPeople, SvgLight } from 'Client/ui/Svg/elements';
import {
  HighlightsBannerTitle,
  HighlightsWrapperStyle,
  HighlightsBannerFiguresContainer,
  HighlightFigureContainer,
  SvgWrapperStyle,
  FiguresWrapperStyle,
  SubtitleFiguresWrapperStyle,
  FigureSeparationLine,
} from './style';

// todo: when adding the component, update margins with parent container
export const HighlightsBanner = ({
  participantsCount,
  proposalsCount,
  partnersCount,
}: HomeHighlightsType) => (
  <HighlightsWrapperStyle>
    <HighlightsBannerTitle>
      {i18n.t('homepage.highlights.title')}
    </HighlightsBannerTitle>
    <HighlightsBannerFiguresContainer as="ul">
      <HighlightFigureContainer as="li">
        <SvgWrapperStyle>
          <SvgPeople />
        </SvgWrapperStyle>
        <FiguresWrapperStyle>{participantsCount}</FiguresWrapperStyle>
        <SubtitleFiguresWrapperStyle>
          {i18n.t('homepage.highlights.participants.subtitle')}
        </SubtitleFiguresWrapperStyle>
        <FigureSeparationLine />
      </HighlightFigureContainer>
      <HighlightFigureContainer as="li">
        <SvgWrapperStyle>
          <SvgLight />
        </SvgWrapperStyle>
        <FiguresWrapperStyle>{proposalsCount}</FiguresWrapperStyle>
        <SubtitleFiguresWrapperStyle>
          {i18n.t('homepage.highlights.proposals.subtitle')}
        </SubtitleFiguresWrapperStyle>
        <FigureSeparationLine />
      </HighlightFigureContainer>
      <HighlightFigureContainer as="li">
        <SvgWrapperStyle>
          <SvgHandHeart />
        </SvgWrapperStyle>
        <FiguresWrapperStyle>{partnersCount}</FiguresWrapperStyle>
        <SubtitleFiguresWrapperStyle>
          {i18n.t('homepage.highlights.partners.subtitle')}
        </SubtitleFiguresWrapperStyle>
        <FigureSeparationLine />
      </HighlightFigureContainer>
    </HighlightsBannerFiguresContainer>
  </HighlightsWrapperStyle>
);
