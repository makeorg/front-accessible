import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeBusinessConsultation } from 'Shared/types/views';
import { isInProgress } from 'Shared/helpers/date';
import { sortConsultationsByLatestDate } from 'Shared/helpers/views';
import { getConsultationLink } from 'Shared/helpers/url';
import {
  SvgAngleArrowRight,
  SvgAngleArrowBottom,
  SvgAngleArrowTop,
} from 'Client/ui/Svg/elements';
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
  BusinessConsultationsMoreStyle,
  BusinessConsultationsMoreArrowStyle,
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
  const initialDisplayedConsultationsLength = 3;
  const sortedConsultations = sortConsultationsByLatestDate(consultations);
  const [displayedConsultations, setDisplayedConsultations] = useState([]);
  const [limitedConsultations, setConsultationsLimit] = useState(
    initialDisplayedConsultationsLength
  );

  const displayViewMore =
    displayedConsultations.length === initialDisplayedConsultationsLength;
  const displayViewLess =
    displayedConsultations.length > initialDisplayedConsultationsLength;

  useEffect(() => {
    const slicedConsultations = sortedConsultations.slice(
      0,
      limitedConsultations
    );

    return setDisplayedConsultations(slicedConsultations);
  });

  const expandConsultations = () => setConsultationsLimit(consultations.length);

  const collapseConsultations = () => setConsultationsLimit(3);

  return (
    <HomepagePaddingContentStyle
      id="business_consultations"
      aria-labelledby="consultations_title"
    >
      <BusinessConsultationsTitleStyle id="consultations_title">
        {i18n.t('homepage.business_consultations.title')}
      </BusinessConsultationsTitleStyle>
      <BusinessConsultationsStyle>
        {displayedConsultations.map((consultation, index) => (
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
                    {i18n.t('homepage.business_consultations.status')}
                  </ScreenReaderItemStyle>
                  {isInProgress(consultation.startDate, consultation.endDate)
                    ? i18n.t(
                        'homepage.business_consultations.question_inprogress'
                      )
                    : i18n.t('homepage.business_consultations.question_ended')}
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
      {displayViewMore && (
        <BusinessConsultationsMoreStyle onClick={expandConsultations}>
          {i18n.t('homepage.business_consultations.more')}
          <SvgAngleArrowBottom
            style={BusinessConsultationsMoreArrowStyle}
            aria-hidden
          />
        </BusinessConsultationsMoreStyle>
      )}
      {displayViewLess && (
        <BusinessConsultationsMoreStyle onClick={collapseConsultations}>
          <SvgAngleArrowTop
            style={BusinessConsultationsMoreArrowStyle}
            aria-hidden
          />
          {i18n.t('homepage.business_consultations.less')}
        </BusinessConsultationsMoreStyle>
      )}
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
