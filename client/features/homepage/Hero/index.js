import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDesktop } from 'Client/hooks/useMedia';
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
      <HeroContentStyle as="section" aria-labelledby="hero_title">
        <HeroInnerContentStyle>
          <HeroTitleStyle id="hero_title">
            {i18n.t('homepage.hero.title')}
          </HeroTitleStyle>
          {!isDesktop && <HeroPictures />}
          <HeroDescriptionStyle>
            {i18n.t('homepage.hero.description')}
          </HeroDescriptionStyle>
          <ColumnToRowToColumnStyle>
            <HeroRedButtonStyle to="/">
              {i18n.t('homepage.hero.participate')}
              <WhiteArrowDownIcon aria-hidden />
            </HeroRedButtonStyle>
            <HeroTransparentButtonStyle to="/">
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
