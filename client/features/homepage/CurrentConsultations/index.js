// @flow
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMobile } from 'Client/hooks/useMedia';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { type CurrentConsultationType } from 'Shared/types/views';
import { type StateRoot } from 'Shared/store/types';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import {
  SpaceBetweenRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { useSlider } from 'Client/hooks/useSlider';
import { trackClickHomepageSliderArrows } from 'Shared/services/Tracking';
import { HomeTitleStyle } from 'Client/pages/Home/Styled';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  CurrentConsultationContainerStyle,
  CurrentConsultationArrowsStyle,
  CurrentConsultationDescriptionStyle,
  CurrentConsultationItemStyle,
  CurrentConsultationListStyle,
} from './Styled';
import {
  CurrentConsultationArticleDesktop,
  CurrentConsultationArticleMobile,
} from './Article';
import {
  CURRENT_CONSULTATION_SLIDER,
  CurrentConsultationSliderParams,
} from './sliderParams';

const setConsultationLink = (
  consultation: CurrentConsultationType,
  country: string,
  language: string
) => {
  const { externalLink, internalLink, questionSlug } = consultation;
  if (externalLink) {
    return {
      as: 'a',
      href: externalLink,
      to: externalLink,
      target: '_blank',
      rel: 'noopener noreferrer',
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
  consultations: CurrentConsultationType[],
};

export const CurrentConsultations = ({
  consultations,
}: CurrentConsultationsProps) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isMobile = useMobile();
  const sliderRef = useRef();
  const hasConsultations = consultations.length > 0;

  useSlider(sliderRef, CurrentConsultationSliderParams, hasConsultations);

  if (!hasConsultations) {
    return null;
  }

  return (
    <CurrentConsultationContainerStyle
      id="current_consultations"
      aria-labelledby="current_consultations_title"
      className={`${CURRENT_CONSULTATION_SLIDER} glider-contain`}
    >
      <GliderStylesheet />
      <SpaceBetweenRowStyle>
        <HomeTitleStyle id="current_consultations_title">
          {i18n.t('homepage.current_consultations.title')}
        </HomeTitleStyle>
        <ScreenReaderItemStyle>
          {i18n.t('common.slider.introduction')}
        </ScreenReaderItemStyle>
        <FlexElementStyle as={isMobile ? HiddenItemStyle : FlexElementStyle}>
          <CurrentConsultationArrowsStyle
            className={`${CURRENT_CONSULTATION_SLIDER} glider-prev`}
            aria-label={i18n.t('common.slider.previous')}
            aria-controls="glide_translator"
            onClick={() => trackClickHomepageSliderArrows()}
          >
            <SvgArrowLeft />
          </CurrentConsultationArrowsStyle>
          <CurrentConsultationArrowsStyle
            className={`${CURRENT_CONSULTATION_SLIDER} glider-next`}
            aria-label={i18n.t('common.slider.next')}
            aria-controls="glide_translator"
            onClick={() => trackClickHomepageSliderArrows()}
          >
            <SvgArrowRight />
          </CurrentConsultationArrowsStyle>
        </FlexElementStyle>
      </SpaceBetweenRowStyle>
      <div className={`${CURRENT_CONSULTATION_SLIDER} glider`} ref={sliderRef}>
        <CurrentConsultationListStyle
          className={`${CURRENT_CONSULTATION_SLIDER} glider-track`}
        >
          {consultations.map(consultation => (
            <CurrentConsultationItemStyle
              key={consultation.questionId}
              className={`${CURRENT_CONSULTATION_SLIDER}`}
            >
              {isMobile ? (
                <CurrentConsultationArticleMobile
                  image={consultation.picture}
                  title={consultation.altPicture}
                  label={consultation.linkLabel}
                  proposalsNumber={consultation.proposalsNumber}
                  linkObject={setConsultationLink(
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
                  label={consultation.label}
                  proposalsNumber={consultation.proposalsNumber}
                  linkText={consultation.linkLabel}
                  linkObject={setConsultationLink(
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
            </CurrentConsultationItemStyle>
          ))}
        </CurrentConsultationListStyle>
      </div>
    </CurrentConsultationContainerStyle>
  );
};
