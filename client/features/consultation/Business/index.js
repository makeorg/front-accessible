import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
import { trackClickHomepageConsultations } from 'Shared/services/Tracking';
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
  const ListRef = useRef(null);
  const initialDisplayedConsultationsLength = 3;
  const sortedConsultations = sortConsultationsByLatestDate(consultations);
  const [limitedConsultations, setConsultationsLimit] = useState(
    initialDisplayedConsultationsLength
  );

  if (consultations.length === 0) {
    return null;
  }

  const slicedConsultations = sortedConsultations.slice(
    0,
    limitedConsultations
  );

  const displayViewMore =
    slicedConsultations.length === initialDisplayedConsultationsLength;
  const displayViewLess =
    slicedConsultations.length > initialDisplayedConsultationsLength;

  const expandConsultations = () => {
    setConsultationsLimit(consultations.length);
    ListRef.current.focus();
  };
  const collapseConsultations = () => {
    setConsultationsLimit(3);
    ListRef.current.focus();
  };

  return (
    <HomepagePaddingContentStyle
      id="business_consultations"
      aria-labelledby="consultations_title"
    >
      <BusinessConsultationsTitleStyle id="consultations_title">
        {i18n.t('homepage.business_consultations.title')}
      </BusinessConsultationsTitleStyle>
      <BusinessConsultationsStyle ref={ListRef} tabIndex={0}>
        {slicedConsultations.map(consultation => (
          <BusinessConsultationsItemStyle key={consultation.slug}>
            <BusinessConsultationsItemLinkStyle
              {...(isInProgress(consultation.startDate, consultation.endDate)
                ? {
                    to: getConsultationLink(
                      country,
                      language,
                      consultation.slug
                    ),
                    as: Link,
                  }
                : { href: consultation.aboutUrl, as: 'a' })}
              onClick={() => trackClickHomepageConsultations()}
            >
              <BusinessConsultationsItemBorderStyle
                colorStart={consultation.theme.gradientStart}
                colorEnd={consultation.theme.gradientEnd}
              />
              <BusinessConsultationStyle>
                <BusinessConsultationsItemStatusStyle>
                  <ScreenReaderItemStyle>
                    {i18n.t('homepage.business_consultations.status')}
                  </ScreenReaderItemStyle>
                  {isInProgress(consultation.startDate, consultation.endDate)
                    ? i18n.t(
                        'homepage.business_consultations.question_inprogress'
                      )
                    : i18n.t('homepage.business_consultations.question_ended')}
                </BusinessConsultationsItemStatusStyle>
                {consultation.question}
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
