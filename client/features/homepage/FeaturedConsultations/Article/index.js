// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { type TypeFeaturedConsultation } from 'Shared/types/views';
import { useDesktop } from 'Client/hooks/useMedia';
import { Tracking } from 'Shared/services/Tracking';
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
}: {
  featured: TypeFeaturedConsultation,
  country: string,
  language: string,
  index: number,
  isAlone?: boolean,
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
        to: buildInternalConsultationLink(
          featured.internalLink,
          featured.questionSlug,
          country,
          language
        ),
        as: Link,
      };

  return (
    <FeaturedArticleStyle
      as={isAlone ? FeaturedArticleCol1Style : FeaturedArticleStyle}
    >
      <FeaturedPictureWraperStyle
        onClick={() =>
          Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
        }
        aria-hidden
        tabIndex={-1}
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
        <LinkAsRedButton
          onClick={() =>
            Tracking.trackClickHomepageFeatured(blockPosition, featured.title)
          }
          {...linkObject}
        >
          {featured.buttonLabel}
        </LinkAsRedButton>
      </FeaturedInformationsWrapperStyle>
    </FeaturedArticleStyle>
  );
};
