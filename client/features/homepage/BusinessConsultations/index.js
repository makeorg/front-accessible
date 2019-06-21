import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeBusinessConsultation } from 'Shared/types/views';
import { isInProgress } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { HomepagePaddingContentStyle } from 'Client/pages/Home/Styled';
import { Tracking } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  BusinessConsultationsTitleStyle,
  BusinessConsultationsStyle,
  BusinessConsultationsItemStyle,
  BusinessConsultationStyle,
  BusinessConsultationsItemLinkStyle,
  BusinessConsultationsItemStatusStyle,
  BusinessConsultationsItemArrowStyle,
  BusinessConsultationsItemBorderStyle,
} from './Styled';

type Props = {
  consultations: TypeBusinessConsultation[],
  country: string,
  language: string,
};

export const BusinessConsultationsComponent = ({
  consultations,
  country,
  language,
}: Props) => {
  return (
    <HomepagePaddingContentStyle
      id="question_list"
      aria-labelledby="consultations_title"
    >
      <BusinessConsultationsTitleStyle id="consultations_title">
        {i18n.t('homepage.question_list.title')}
      </BusinessConsultationsTitleStyle>
      <BusinessConsultationsStyle>
        {consultations.map((consultation, index) => (
          <BusinessConsultationsItemStyle key={consultation.slug}>
            <BusinessConsultationsItemLinkStyle
              {...(isInProgress(consultation.startDate, consultation.endDate)
                ? {
                    to: getConsultationLink(
                      country,
                      language,
                      consultation.slug
                    ),
                  }
                : { href: consultation.aboutUrl, as: 'a' })}
              onClick={() => Tracking.trackClickHomepageConsultations()}
              aria-flowto={`consultation_title_${index}`}
            >
              <BusinessConsultationsItemBorderStyle
                colorStart={consultation.theme.gradientStart}
                colorEnd={consultation.theme.gradientEnd}
              />
              <BusinessConsultationStyle>
                <BusinessConsultationsItemStatusStyle
                  id={`consultation_status_${index}`}
                >
                  <ScreenReaderItemStyle>
                    {i18n.t('homepage.question_list.status')}
                  </ScreenReaderItemStyle>
                  {isInProgress(consultation.startDate, consultation.endDate)
                    ? i18n.t('homepage.question_list.question_inprogress')
                    : i18n.t('homepage.question_list.question_ended')}
                </BusinessConsultationsItemStatusStyle>
                <span
                  id={`consultation_title_${index}`}
                  aria-flowto={`consultation_status_${index}`}
                >
                  {consultation.title}
                </span>
              </BusinessConsultationStyle>
              <SvgAngleArrowRight style={BusinessConsultationsItemArrowStyle} />
            </BusinessConsultationsItemLinkStyle>
          </BusinessConsultationsItemStyle>
        ))}
      </BusinessConsultationsStyle>
    </HomepagePaddingContentStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const BusinessConsultations = connect(mapStateToProps)(
  BusinessConsultationsComponent
);
