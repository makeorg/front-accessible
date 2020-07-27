import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  trackClickHomepageParticipate,
  trackClickHomepageDiscover,
} from 'Shared/services/Tracking';
import { HeroPictures } from './Pictures';
import {
  ColumnToRowToColumnStyle,
  HeroTitleStyle,
  HeroDescriptionStyle,
  HeroWrapperStyle,
  HeroRedButtonStyle,
  HeroTransparentButtonStyle,
  WhiteArrowDownIcon,
  BlackArrowDownIcon,
  HeroContentStyle,
  HeroInnerContentStyle,
} from './style';

export const Hero = () => {
  const isDesktop = useDesktop();

  return (
    <HeroWrapperStyle>
      <HeroContentStyle as="section" aria-labelledby="hero-title">
        <HeroInnerContentStyle>
          <HeroTitleStyle id="hero-title" data-cy-container="hero-title">
            {i18n.t('homepage.hero.title')}
          </HeroTitleStyle>
          {!isDesktop && <HeroPictures />}
          <HeroDescriptionStyle>
            {i18n.t('homepage.hero.description')}
          </HeroDescriptionStyle>
          <ColumnToRowToColumnStyle>
            <HeroRedButtonStyle
              as="a"
              href="#current_questions"
              onClick={() => trackClickHomepageParticipate()}
              data-cy-link="participate-consultations"
            >
              {i18n.t('homepage.hero.participate')}
              <WhiteArrowDownIcon aria-hidden />
            </HeroRedButtonStyle>
            <HeroTransparentButtonStyle
              as="a"
              href="#featured_questions"
              onClick={() => trackClickHomepageDiscover()}
              data-cy-link="discover-great-causes"
            >
              {i18n.t('homepage.hero.discover')}
              <BlackArrowDownIcon aria-hidden />
            </HeroTransparentButtonStyle>
          </ColumnToRowToColumnStyle>
        </HeroInnerContentStyle>
        {isDesktop && <HeroPictures />}
      </HeroContentStyle>
    </HeroWrapperStyle>
  );
};
