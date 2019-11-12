import React from 'react';
import { DateHelper } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  IntroWrapperStyle,
  DefaultBannerTitleStyle,
  DefaultBannerMainContainer,
  DefaultBannerTimeStyle,
} from '../Styled/IntroBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const DefaultBanner = ({ question, questionConfiguration }: Props) => (
  <IntroWrapperStyle
    as="header"
    gradientStart={questionConfiguration.theme.gradientStart}
    gradientEnd={questionConfiguration.theme.gradientEnd}
    backgroundcolor={questionConfiguration.theme.gradientStart}
    id="intro"
  >
    <DefaultBannerMainContainer>
      <DefaultBannerTitleStyle>
        {question.wording.question}
      </DefaultBannerTitleStyle>
      <DefaultBannerTimeStyle>
        {i18n.t('consultation.tabs.consultation')}
        {i18n.t('consultation.tabs.from')}
        <time dateTime={question.startDate}>
          {DateHelper.creationDateFormat(question.startDate)}
        </time>
        {i18n.t('consultation.tabs.to')}
        <time dateTime={question.endDate}>
          {DateHelper.creationDateFormat(question.endDate)}
        </time>
      </DefaultBannerTimeStyle>
    </DefaultBannerMainContainer>
  </IntroWrapperStyle>
);
