import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type TypeFeaturedConsultation } from 'Shared/types/views';
import { useDesktop } from 'Client/hooks/useMedia';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
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
  FeaturedInnerContent,
  FeaturedArticleCol1Style,
} from './Styled';

const buildInternalLink = (
  target: string,
  questionSlug: string,
  country: string,
  language: string
) => `${country}-${language}/consultation/${questionSlug}/${target}`;

const Featured = ({
  featured,
  country,
  language,
  index,
}: {
  featured: TypeFeaturedConsultation,
  country: string,
  language: string,
  index: number,
}) => {
  const isDesktop = useDesktop();
  const blockPosition = index + 1;
  const linkObject = featured.externalLink
    ? {
        as: 'a',
        href: featured.externalLink,
        target: '_blank',
      }
    : {
        to: buildInternalLink(
          featured.internalLink,
          featured.questionSlug,
          country,
          language
        ),
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
          src={isDesktop ? featured.landscapePicture : featured.portraitPicture}
          alt={i18n.t('homepage.featured.link', { name: featured.altPicture })}
        />
      </FeaturedPictureWraperStyle>
      <FeaturedInformationsWrapperStyle>
        <FeaturedInnerContent>
          <FeaturedTypeStyle>
            <ScreenReaderItemStyle>
              {i18n.t('homepage.featured.status')}
            </ScreenReaderItemStyle>
            {featured.label}
          </FeaturedTypeStyle>
          <FeaturedArticleTitleStyle>
            {featured.title}
          </FeaturedArticleTitleStyle>
          {isDesktop && featured.description && (
            <FeaturedDescriptionStyle>
              {featured.description}
            </FeaturedDescriptionStyle>
          )}
        </FeaturedInnerContent>
        <FeaturedLinkStyle
          onClick={() =>
            Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
          }
          {...linkObject}
        >
          {featured.buttonLabel}
        </FeaturedLinkStyle>
      </FeaturedInformationsWrapperStyle>
    </React.Fragment>
  );
};

const FeaturedDesktop = ({ featureds, country, language }) => {
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
          <FeaturedArticleStyle key={`article_title_${key + 1}`}>
            <Featured
              featured={featured}
              index={key + 1}
              country={country}
              language={language}
            />
          </FeaturedArticleStyle>
        ))}
      </FeaturedArticleColumnStyle>
    </FeaturedArticleWrapperStyle>
  );
};

const FeaturedMobile = ({ featureds, country, language }) => (
  <FeaturedArticleWrapperStyle>
    {featureds.map((featured, key) => (
      <FeaturedArticleStyle key={`article_title_${key + 1}`}>
        <Featured
          featured={featured}
          index={key + 1}
          country={country}
          language={language}
        />
      </FeaturedArticleStyle>
    ))}
  </FeaturedArticleWrapperStyle>
);

type Props = {
  featureds: TypeFeaturedConsultation[],
  country: string,
  language: string,
};
const FeaturedConsultationsComponent = ({
  featureds,
  country,
  language,
}: Props) => {
  const isDesktop = useDesktop();

  if (featureds.length <= 0) {
    return null;
  }

  return (
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      {isDesktop ? (
        <FeaturedDesktop
          featureds={featureds}
          country={country}
          language={language}
        />
      ) : (
        <FeaturedMobile
          featureds={featureds}
          country={country}
          language={language}
        />
      )}
    </HomepageInnerContentStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const FeaturedConsultations = connect(mapStateToProps)(
  FeaturedConsultationsComponent
);
