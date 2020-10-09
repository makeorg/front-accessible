import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  trackClickHomepageParticipate,
  trackClickHomepageDiscover,
} from 'Shared/services/Tracking';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { HeroPictures } from './Pictures';
import {
  ColumnToRowToColumnStyle,
  HeroTitleStyle,
  HeroDescriptionStyle,
  HeroRedButtonStyle,
  HeroTransparentButtonStyle,
  WhiteArrowDownIcon,
  BlackArrowDownIcon,
  HeroContentStyle,
  HeroInnerContentStyle,
  HeroWrapperStyle,
} from './style';

export const Hero = () => {
  const isDesktop = useDesktop();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFr = country === 'FR';

  return (
    <HeroWrapperStyle as="section" aria-labelledby="hero-title">
      <HeroContentStyle>
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
            {isFr && (
              <HeroTransparentButtonStyle
                as="a"
                href="#featured_questions"
                onClick={() => trackClickHomepageDiscover()}
                data-cy-link="discover-great-causes"
              >
                {i18n.t('homepage.hero.discover')}
                <BlackArrowDownIcon aria-hidden />
              </HeroTransparentButtonStyle>
            )}
          </ColumnToRowToColumnStyle>
        </HeroInnerContentStyle>
        {isDesktop && <HeroPictures />}
      </HeroContentStyle>
    </HeroWrapperStyle>
  );
};
