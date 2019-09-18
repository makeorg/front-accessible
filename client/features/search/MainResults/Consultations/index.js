// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { getConsultationLink } from 'Shared/helpers/url';
import { trackClickHomepageConsultations } from 'Shared/services/Tracking';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  BusinessConsultationsItemStyle,
  BusinessConsultationStyle,
  BusinessConsultationsItemLinkStyle,
  BusinessConsultationsItemStatusStyle,
  BusinessConsultationsItemArrowStyle,
  BusinessConsultationsItemBorderStyle,
} from 'Client/features/consultation/Business/Styled';

import { SearchResultsConsultationListStyle } from '../../Styled';

type Props = {
  country: string,
  language: string,
  questions: TypeQuestion[],
};
const MainResultsConsultationsComponent = ({
  country,
  language,
  questions,
}: Props) => {
  return (
    <div id="consultations_list" role="feed">
      <SearchResultsConsultationListStyle>
        {questions.map(question => (
          <BusinessConsultationsItemStyle
            key={question.slug}
            backgroundColor={BasicColors.PureWhite}
          >
            <BusinessConsultationsItemLinkStyle
              {...(isInProgress(question.startDate, question.endDate)
                ? {
                    to: getConsultationLink(country, language, question.slug),
                    as: Link,
                  }
                : { href: question.aboutUrl, as: 'a' })}
              onClick={() => trackClickHomepageConsultations()}
            >
              <BusinessConsultationsItemBorderStyle
                colorStart={question.theme.gradientStart}
                colorEnd={question.theme.gradientEnd}
              />
              <BusinessConsultationStyle>
                <BusinessConsultationsItemStatusStyle>
                  <ScreenReaderItemStyle>
                    {i18n.t('homepage.business_consultations.status')}
                  </ScreenReaderItemStyle>
                  {isInProgress(question.startDate, question.endDate)
                    ? i18n.t(
                        'homepage.business_consultations.question_inprogress'
                      )
                    : i18n.t('homepage.business_consultations.question_ended')}
                </BusinessConsultationsItemStatusStyle>
                {question.question}
              </BusinessConsultationStyle>
              <SvgAngleArrowRight style={BusinessConsultationsItemArrowStyle} />
            </BusinessConsultationsItemLinkStyle>
          </BusinessConsultationsItemStyle>
        ))}
      </SearchResultsConsultationListStyle>
    </div>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const MainResultsConsultations = connect(mapStateToProps)(
  MainResultsConsultationsComponent
);
