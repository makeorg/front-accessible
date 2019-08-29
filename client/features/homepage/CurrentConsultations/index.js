// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMobile } from 'Client/hooks/useMedia';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { type TypeCurrentConsultation } from 'Shared/types/views';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import {
  SpaceBetweenRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { useSlider } from 'Client/hooks/useSlider';
import { Tracking } from 'Shared/services/Tracking';
import { HomeTitleStyle } from 'Client/pages/Home/Styled';
import {
  CurrentConsultationContainerStyle,
  CurrentConsultationArrowsStyle,
  CurrentConsultationDescriptionStyle,
} from './Styled';
import {
  CurrentConsultationArticleDesktop,
  CurrentConsultationArticleMobile,
} from './Article';
import { CurrentConsultationSliderParams } from './sliderParams';

export const getConsultationLink = (
  consultation: TypeCurrentConsultation,
  country: string,
  language: string
) => {
  const { externalLink, internalLink, questionSlug } = consultation;

  if (externalLink) {
    return {
      as: 'a',
      href: externalLink,
      target: '_blank',
    };
  }

  return {
    to: buildInternalConsultationLink(
      internalLink,
      questionSlug,
      country,
      language
    ),
    as: Link,
  };
};

type CurrentConsultationsProps = {
  consultations: TypeCurrentConsultation[],
  country: string,
  language: string,
};

export const CurrentConsultationsComponent = ({
  consultations,
  country,
  language,
}: CurrentConsultationsProps) => {
  const isMobile = useMobile();
  const noConsultations = consultations.length <= 0;

  useSlider('glide', CurrentConsultationSliderParams, noConsultations);

  if (noConsultations) {
    return <Spinner />;
  }

  return (
    <CurrentConsultationContainerStyle
      id="current_consultations"
      aria-labelledby="current_consultations_title"
      className="glide"
    >
      <GliderStylesheet />
      <SpaceBetweenRowStyle>
        <HomeTitleStyle id="current_consultations_title">
          {i18n.t('homepage.current_consultations.title')}
        </HomeTitleStyle>
        <ScreenReaderItemStyle>
          {i18n.t('common.slider.introduction')}
        </ScreenReaderItemStyle>
        {!isMobile && (
          <FlexElementStyle className="glide__arrows" data-glide-el="controls">
            <CurrentConsultationArrowsStyle
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
              aria-label={i18n.t('common.slider.previous')}
              aria-controls="glide_translator"
              onClick={() => Tracking.trackClickHomepageSliderArrows()}
            >
              <SvgArrowLeft aria-hidden />
            </CurrentConsultationArrowsStyle>
            <CurrentConsultationArrowsStyle
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
              aria-label={i18n.t('common.slider.next')}
              aria-controls="glide_translator"
              onClick={() => Tracking.trackClickHomepageSliderArrows()}
            >
              <SvgArrowRight aria-hidden />
            </CurrentConsultationArrowsStyle>
          </FlexElementStyle>
        )}
      </SpaceBetweenRowStyle>
      <div data-glide-el="track" className="glide__track">
        <ul id="glide_translator" className="glide__slides">
          {consultations.map(consultation => (
            <li key={consultation.questionId} className="glide__slide">
              {isMobile ? (
                <CurrentConsultationArticleMobile
                  image={consultation.picture}
                  title={consultation.altPicture}
                  label={consultation.linkLabel}
                  proposalsNumber={consultation.proposalsNumber}
                  linkObject={getConsultationLink(
                    consultation,
                    country,
                    language
                  )}
                  country={country}
                  language={language}
                />
              ) : (
                <CurrentConsultationArticleDesktop
                  image={consultation.picture}
                  title={consultation.altPicture}
                  label={consultation.linkLabel}
                  proposalsNumber={consultation.proposalsNumber}
                  linkText={consultation.linkLabel}
                  linkObject={getConsultationLink(
                    consultation,
                    country,
                    language
                  )}
                  country={country}
                  language={language}
                >
                  <CurrentConsultationDescriptionStyle>
                    {consultation.description}
                  </CurrentConsultationDescriptionStyle>
                </CurrentConsultationArticleDesktop>
              )}
            </li>
          ))}
        </ul>
      </div>
    </CurrentConsultationContainerStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const CurrentConsultations = connect(mapStateToProps)(
  CurrentConsultationsComponent
);
