import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { useDesktop } from 'Client/hooks/useMedia';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
import HandicapPicture from 'Client/app/assets/images/homepage/handicap_col1.jpg';
import HandicapMobilePicture from 'Client/app/assets/images/homepage/handicap_col2.jpg';
import AlimentationPicture from 'Client/app/assets/images/homepage/alimentation.jpg';
import WeeuropeansPicture from 'Client/app/assets/images/homepage/we-europeans.jpg';

import { Tracking } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  FeaturedArticleWrapperStyle,
  FeaturedInformationsWrapperStyle,
  FeaturedPictureWraperStyle,
  FeaturedArticleColumnStyle,
  FeaturedArticleStyle,
  FeaturedTypeStyle,
  FeaturedArticleTitleStyle,
  FeaturedDescriptionStyle,
  FeaturedLinkStyle,
  FeaturedArticleCol1Style,
} from './Styled';

const featureds = [
  {
    type: 'Grande Cause',
    title:
      'Comment la société peut-elle garantir une vraie place aux personnes handicapées ?',
    description:
      'MAKE.ORG et ses partenaires ont lancé une consultation pour garantir une vraie place aux personnes handicapées. Votez, proposez, agissez !',
    picture: HandicapPicture,
    picture_mobile: HandicapMobilePicture,
    cta_text: 'Participez',
    link: '/FR-fr/consultation/handicap/consultation',
    is_external_link: false,
  },
  {
    type: 'Grande cause',
    title: 'Comment permettre à chacun de mieux manger ?',
    description: '',
    picture: AlimentationPicture,
    picture_mobile: AlimentationPicture,
    cta_text: 'En savoir +',
    link: 'https://about.make.org/about-mieuxmanger',
    is_external_link: true,
  },
  {
    type: 'Actualité',
    title:
      'WeEuropeans : 10 propositions sélectionnées par les citoyens européens.',
    description: '',
    picture: WeeuropeansPicture,
    picture_mobile: WeeuropeansPicture,
    cta_text: 'En savoir +',
    link: 'https://weeuropeans.eu/',
    is_external_link: true,
  },
];

const FeaturedDesktop = () => {
  const featuredsCol1 = featureds[0];
  const featuredsCol2 = featureds.slice(1);

  return (
    <FeaturedArticleWrapperStyle id="featured_list">
      <FeaturedArticleColumnStyle>
        <FeaturedArticleCol1Style key="article_title_0">
          <Featured featured={featuredsCol1} index={0} />
        </FeaturedArticleCol1Style>
      </FeaturedArticleColumnStyle>
      <FeaturedArticleColumnStyle>
        {featuredsCol2.map((featured, key) => (
          <FeaturedArticleStyle
            key={`article_title_${key + 1}`}
            aria-labelledby={`article_title_${key + 1}`}
          >
            <Featured featured={featured} index={key + 1} />
          </FeaturedArticleStyle>
        ))}
      </FeaturedArticleColumnStyle>
    </FeaturedArticleWrapperStyle>
  );
};

const FeaturedMobile = () => (
  <FeaturedArticleWrapperStyle>
    {featureds.map((featured, key) => (
      <FeaturedArticleStyle key={`article_title_${key + 1}`}>
        <Featured featured={featured} index={key + 1} />
      </FeaturedArticleStyle>
    ))}
  </FeaturedArticleWrapperStyle>
);

const Featured = ({ featured, index }) => {
  const blockPosition = index + 1;
  const isDesktop = useDesktop();
  const linkObject = featured.is_external_link
    ? {
        as: 'a',
        href: featured.link,
        target: '_blank',
      }
    : {
        to: featured.link,
        as: Link,
      };
  return (
    <React.Fragment>
      <FeaturedPictureWraperStyle
        onClick={() =>
          Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
        }
        aria-hidden
        {...linkObject}
      >
        <img
          src={isDesktop ? featured.picture : featured.picture_mobile}
          alt={i18n.t('homepage.featured.link', { name: featured.title })}
        />
      </FeaturedPictureWraperStyle>
      <FeaturedInformationsWrapperStyle>
        <div>
          <FeaturedTypeStyle>
            <ScreenReaderItemStyle>
              {i18n.t('homepage.featured.status')}
            </ScreenReaderItemStyle>
            {featured.type}
          </FeaturedTypeStyle>
          <FeaturedArticleTitleStyle>
            {featured.title}
          </FeaturedArticleTitleStyle>
          {featured.description && isDesktop && (
            <FeaturedDescriptionStyle>
              {featured.description}
            </FeaturedDescriptionStyle>
          )}
        </div>
        <FeaturedLinkStyle
          onClick={() =>
            Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
          }
          {...linkObject}
        >
          {featured.cta_text}
        </FeaturedLinkStyle>
      </FeaturedInformationsWrapperStyle>
    </React.Fragment>
  );
};

export const FeaturedConsultations = () => {
  const isDesktop = useDesktop();

  return (
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      {isDesktop ? <FeaturedDesktop /> : <FeaturedMobile />}
    </HomepageInnerContentStyle>
  );
};
