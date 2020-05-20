// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
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
export const HighlightsBanner = () => {
  return (
    <HighlightsWrapperStyle>
      <HighlightsBannerTitle>
        {i18n.t('homepage.highlights.title')}
      </HighlightsBannerTitle>
      <HighlightsBannerFiguresContainer>
        {/* todo: when endpoint is created, map on data to build <HightlightFigureContainer/> element */}
        <HighlightFigureContainer>
          <SvgWrapperStyle>
            <SvgPeople />
          </SvgWrapperStyle>
          <FiguresWrapperStyle>
            {i18n.t('homepage.highlights.participants.figure')}
          </FiguresWrapperStyle>
          <SubtitleFiguresWrapperStyle>
            {i18n.t('homepage.highlights.participants.subtitle')}
          </SubtitleFiguresWrapperStyle>
          <FigureSeparationLine />
        </HighlightFigureContainer>
        <HighlightFigureContainer>
          <SvgWrapperStyle>
            <SvgLight />
          </SvgWrapperStyle>
          <FiguresWrapperStyle>
            {i18n.t('homepage.highlights.proposals.figure')}
          </FiguresWrapperStyle>
          <SubtitleFiguresWrapperStyle>
            {i18n.t('homepage.highlights.proposals.subtitle')}
          </SubtitleFiguresWrapperStyle>
          <FigureSeparationLine />
        </HighlightFigureContainer>
        <HighlightFigureContainer>
          <SvgWrapperStyle>
            <SvgHandHeart />
          </SvgWrapperStyle>
          <FiguresWrapperStyle>
            {i18n.t('homepage.highlights.partners.figure')}
          </FiguresWrapperStyle>
          <SubtitleFiguresWrapperStyle>
            {i18n.t('homepage.highlights.partners.subtitle')}
          </SubtitleFiguresWrapperStyle>
          <FigureSeparationLine />
        </HighlightFigureContainer>
      </HighlightsBannerFiguresContainer>
    </HighlightsWrapperStyle>
  );
};
