// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { type FeaturedConsultationType } from 'Shared/types/views';
import { useDesktop, useTablet } from 'Client/hooks/useMedia';
import { trackClickHomepageFeatured as trackClick } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  FeaturedInformationsWrapperStyle,
  FeaturedPictureWraperStyle,
  FeaturedTypeStyle,
  FeaturedArticleStyle,
  FeaturedArticleCol1Style,
  FeaturedArticleTitleStyle,
  FeaturedDescriptionStyle,
  FeaturedInnerContent,
} from '../Styled';

export const FeaturedArticle = ({
  featured,
  country,
  language,
  index,
  isAlone,
  featuredsLength,
}: {
  featured: FeaturedConsultationType,
  country: string,
  language: string,
  index: number,
  featuredsLength: number,
  isAlone?: boolean,
}) => {
  const isDesktop = useDesktop();
  const isTablet = useTablet();
  const blockPosition = index + 1;
  const linkObject = featured.externalLink
    ? {
        as: 'a',
        href: featured.externalLink,
        target: '_blank',
        rel: 'noopener noreferrer',
        to: undefined,
      }
    : {
        as: Link,
        href: undefined,
        target: undefined,
        rel: undefined,
        to: buildInternalConsultationLink(
          featured.internalLink,
          featured.questionSlug,
          country,
          language
        ),
      };

  const firstSlotImage = featuredsLength === 3 && index === 1;
  const { as, href, target, rel, to } = linkObject;

  return (
    <FeaturedArticleStyle
      as={isAlone ? FeaturedArticleCol1Style : FeaturedArticleStyle}
    >
      <FeaturedPictureWraperStyle
        onClick={() => trackClick(blockPosition, featured.title)}
        aria-hidden
        tabIndex={-1}
        as={as}
        href={href}
        target={target}
        rel={rel}
        to={to}
      >
        {firstSlotImage ? (
          <img
            src={
              isTablet ? featured.landscapePicture : featured.portraitPicture
            }
            alt={i18n.t('homepage.featured.link', {
              name: featured.altPicture,
            })}
          />
        ) : (
          <img
            src={
              isDesktop ? featured.landscapePicture : featured.portraitPicture
            }
            alt={i18n.t('homepage.featured.link', {
              name: featured.altPicture,
            })}
          />
        )}
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
        <LinkAsRedButton
          onClick={() => trackClick(blockPosition, featured.title)}
          as={as}
          href={href}
          target={target}
          rel={rel}
          to={to}
        >
          {featured.buttonLabel}
        </LinkAsRedButton>
      </FeaturedInformationsWrapperStyle>
    </FeaturedArticleStyle>
  );
};
