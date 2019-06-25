// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMobile } from 'Client/hooks/useMedia';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { type TypeCurrentConsultation } from 'Shared/types/views';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { SvgArrowLeft, SvgArrowRight } from 'Client/ui/Svg/elements';
import {
  SpaceBetweenRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { useSlider } from 'Client/hooks/useSlider';
import {
  CurrentConsultationContainerStyle,
  CurrentConsultationArrowsStyle,
  CurrentConsultationDescriptionStyle,
} from './Styled';
import {
  CurrentConsultationArticleDesktop,
  CurrentConsultationArticleMobile,
} from './Article';
import {
  setCurrentAria,
  setBusyAria,
  removeBusyAria,
  removeCurrentAria,
} from './Slider';

const mountedCallback = () => setCurrentAria();
const moveCallback = () => setBusyAria();
const afterMoveCallback = () => {
  removeBusyAria();
  removeCurrentAria();
  setCurrentAria();
};

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
  useSlider(noConsultations, mountedCallback, moveCallback, afterMoveCallback);

  if (noConsultations) {
    return <Spinner />;
  }

  return (
    <CurrentConsultationContainerStyle
      id="great_cause_list"
      aria-labelledby="great_causes_title"
      className="glide"
    >
      <GliderStylesheet />
      <SpaceBetweenRowStyle>
        <HomeTitleStyle id="great_causes_title">
          {i18n.t('homepage.great-causes.title')}
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
            >
              <SvgArrowLeft aria-hidden />
            </CurrentConsultationArrowsStyle>
            <CurrentConsultationArrowsStyle
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
              aria-label={i18n.t('common.slider.next')}
              aria-controls="glide_translator"
            >
              <SvgArrowRight aria-hidden />
            </CurrentConsultationArrowsStyle>
          </FlexElementStyle>
        )}
      </SpaceBetweenRowStyle>
      <div data-glide-el="track" className="glide__track">
        <ul id="glide_translator" className="glide__slides">
          {consultations.map(consultation => (
            <li key={consultation.title} className="glide__slide">
              {isMobile ? (
                <CurrentConsultationArticleMobile
                  image={consultation.picture}
                  title={consultation.title}
                  linkObject={getConsultationLink(
                    consultation,
                    country,
                    language
                  )}
                />
              ) : (
                <CurrentConsultationArticleDesktop
                  image={consultation.picture}
                  title={consultation.title}
                  linkText={consultation.linkLabel}
                  linkObject={getConsultationLink(
                    consultation,
                    country,
                    language
                  )}
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
