// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { type HomeHighlightsType } from 'Shared/types/views';
import { useSelector } from 'react-redux';
import { formatNumberByLocalisation } from 'Shared/helpers/numberFormatter';
import {
  HomepageSectionStyle,
  HomepageSectionTitleStyle,
} from 'Client/pages/Home/style';
import {
  HighlightsBannerFiguresContainerStyle,
  HighlightFigureContainerStyle,
  FiguresStyle,
  SubtitleFiguresStyle,
  FigureSeparationLineStyle,
  PeopleIconStyle,
  LigthIconStyle,
  HeartIconStyle,
} from './style';

type Props = {
  highlights: HomeHighlightsType,
};
export const HighlightsBanner = ({ highlights }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const { participantsCount, proposalsCount, partnersCount } = highlights;
  return (
    <HomepageSectionStyle as="section" aria-labelledby="highlights_title">
      <HomepageSectionTitleStyle
        id="highlights_title"
        data-cy-container="highlights_title"
      >
        {i18n.t('homepage.highlights.title')}
      </HomepageSectionTitleStyle>
      <HighlightsBannerFiguresContainerStyle as="ul">
        <HighlightFigureContainerStyle as="li">
          <PeopleIconStyle aria-hidden />
          <FiguresStyle>
            {formatNumberByLocalisation(participantsCount, country, language)}
          </FiguresStyle>
          <SubtitleFiguresStyle>
            {i18n.t('homepage.highlights.participants.subtitle')}
          </SubtitleFiguresStyle>
          <FigureSeparationLineStyle />
        </HighlightFigureContainerStyle>
        <HighlightFigureContainerStyle as="li">
          <LigthIconStyle aria-hidden />
          <FiguresStyle>
            {formatNumberByLocalisation(proposalsCount, country, language)}
          </FiguresStyle>
          <SubtitleFiguresStyle>
            {i18n.t('homepage.highlights.proposals.subtitle')}
          </SubtitleFiguresStyle>
          <FigureSeparationLineStyle />
        </HighlightFigureContainerStyle>
        <HighlightFigureContainerStyle as="li">
          <HeartIconStyle aria-hidden />
          <FiguresStyle>
            {formatNumberByLocalisation(partnersCount, country, language)}
          </FiguresStyle>
          <SubtitleFiguresStyle>
            {i18n.t('homepage.highlights.partners.subtitle')}
          </SubtitleFiguresStyle>
          <FigureSeparationLineStyle />
        </HighlightFigureContainerStyle>
      </HighlightsBannerFiguresContainerStyle>
    </HomepageSectionStyle>
  );
};
