import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { useMobile } from 'Client/hooks/useMedia';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
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
    picture: '/images/homepage/handicap_col1.jpg',
    picture_mobile: '/images/homepage/handicap_col2.jpg',
    cta_text: 'En savoir plus',
    link: 'http://about-handicap.make.org/',
    is_external_link: true,
  },
  {
    type: 'Grande cause',
    title: 'Comment permettre à chacun de mieux manger ?',
    description: '',
    picture: '/images/homepage/alimentation.jpg',
    picture_mobile: '/images/homepage/alimentation.jpg',
    cta_text: 'Votez maintenant',
    link: '/FR-fr/consultation/mieuxmanger/consultation',
    is_external_link: false,
  },
  {
    type: 'Actualité',
    title:
      'WeEuropeans : De quel parti politique êtes-vous le/la plus proche ?',
    description: '',
    picture: '/images/homepage/we-europeans.jpg',
    picture_mobile: '/images/homepage/we-europeans.jpg',
    cta_text: 'Démarrer le quiz',
    link: 'https://weeuropeans.eu/fr/fr/guide',
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
  const isMobile = useMobile();

  return (
    <React.Fragment>
      <FeaturedPictureWraperStyle>
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
          {...(featured.is_external_link
            ? { as: 'a', href: featured.link, target: '_blank' }
            : { to: featured.link, as: Link })}
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
