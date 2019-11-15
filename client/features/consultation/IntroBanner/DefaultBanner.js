import React from 'react';
import { DateHelper } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import {
  IntroWrapperStyle,
  DefaultBannerTitleStyle,
  DefaultBannerMainContainer,
  DefaultBannerTimeStyle,
} from '../Styled/IntroBanner';

type Props = {
  question: TypeQuestion,
};

export const DefaultBanner = ({ question }: Props) => (
  <IntroWrapperStyle
    as="header"
    gradientStart={question.theme.gradientStart}
    gradientEnd={question.theme.gradientEnd}
    backgroundcolor={question.theme.gradientStart}
    id="intro"
  >
    <DefaultBannerMainContainer>
      <DefaultBannerTitleStyle style={{ color: question.theme.fontColor }}>
        {question.wording.question}
      </DefaultBannerTitleStyle>
      <DefaultBannerTimeStyle style={{ color: question.theme.fontColor }}>
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
