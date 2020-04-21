// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import {
  BusinessConsultationsItemStyle,
  BusinessConsultationsItemLinkStyle,
  BusinessConsultationsItemBorderStyle,
  BusinessConsultationStyle,
  BusinessConsultationsItemStatusStyle,
  BusinessConsultationsItemArrowStyle,
} from 'Client/features/consultation/Business/Styled';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { isInProgress } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import { trackClickHomepageConsultations } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { SearchResultsConsultationListStyle } from '../Styled';

type Props = {
  questions: QuestionType[],
};

export const BusinessConsultationsList = ({ questions }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <SearchResultsConsultationListStyle>
      {questions.map(question => (
        <BusinessConsultationsItemStyle
          key={question.slug}
          backgroundColor={BasicColors.PureWhite}
        >
          <BusinessConsultationsItemLinkStyle
            {...(isInProgress(question)
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
                {isInProgress(question)
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
  );
};
