import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { useMobile } from 'Client/hooks/useMedia';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
import HandicapPicture from 'Client/app/assets/images/homepage/handicap_col1.jpg';
import HandicapMobilePicture from 'Client/app/assets/images/homepage/handicap_col2.jpg';
import AlimentationPicture from 'Client/app/assets/images/homepage/alimentation.jpg';
import WeeuropeansPicture from 'Client/app/assets/images/homepage/we-europeans.jpg';

import { Tracking } from 'Shared/services/Tracking';
import {
  FeaturedArticleWrapperStyle,
  FeaturedInformationsWraperStyle,
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
    type: 'Lancement',
    title:
      'Comment la société peut-elle garantir une vraie place aux personnes handicapées ?',
    description:
      'Le 28 mai 2019, MAKE.ORG et ses partenaires lancent une consultation pour garantir une vraie place aux personnes handicapées.',
    picture: HandicapPicture,
    picture_mobile: HandicapMobilePicture,
    cta_text: 'Participez à la consultation',
    link: '/FR-fr/consultation/handicap/selection',
    is_external_link: false,
  },
  {
    type: 'Grande cause',
    title: 'Comment permettre à chacun de mieux manger ?',
    description: '',
    picture: AlimentationPicture,
    picture_mobile: AlimentationPicture,
    cta_text: 'Votez maintenant',
    link: '/FR-fr/consultation/mieuxmanger/consultation',
    is_external_link: false,
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
        <FeaturedArticleCol1Style
          key="article_title_0"
          aria-labelledby="article_title_0"
        >
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
      <FeaturedArticleStyle
        key={`article_title_${key + 1}`}
        aria-labelledby={`article_title_${key + 1}`}
      >
        <Featured featured={featured} index={key + 1} />
      </FeaturedArticleStyle>
    ))}
  </FeaturedArticleWrapperStyle>
);

const Featured = ({ featured, index }) => {
  const blockPosition = index + 1;
  const isMobile = useMobile();
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
        {...linkObject}
      >
        <img
          src={isMobile ? featured.picture_mobile : featured.picture}
          alt={featured.title}
        />
      </FeaturedPictureWraperStyle>
      <FeaturedInformationsWraperStyle>
        <FeaturedTypeStyle>{featured.type}</FeaturedTypeStyle>
        <FeaturedArticleTitleStyle id={`article_title_${index}`}>
          {featured.title}
        </FeaturedArticleTitleStyle>
        {featured.description && !isMobile && (
          <FeaturedDescriptionStyle>
            {featured.description}
          </FeaturedDescriptionStyle>
        )}
        <FeaturedLinkStyle
          onClick={() =>
            Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
          }
          {...linkObject}
        >
          {featured.cta_text}
        </FeaturedLinkStyle>
      </FeaturedInformationsWraperStyle>
    </React.Fragment>
  );
};

export const FeaturedConsultations = () => {
  const isMobile = useMobile();

  return (
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      {isMobile ? <FeaturedMobile /> : <FeaturedDesktop />}
    </HomepageInnerContentStyle>
  );
};
