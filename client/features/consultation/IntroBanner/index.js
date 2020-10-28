// @flow
import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import {
  IntroBannerTitleStyle,
  GreatCauseIntroLabelStyle,
  GreatCauseIntroBannerTitleStyle,
  IntroWrapperStyle,
  DefaultBannerTitleStyle,
  DefaultBannerMainContainer,
  DefaultBannerTimeStyle,
} from 'Client/features/consultation/Styled/IntroBanner';
import { Image } from 'Client/ui/Image';

type Props = {
  question: QuestionType,
};

export const IntroBanner = ({ question }: Props) => {
  return isGreatCause(question.operationKind) ? (
    <IntroWrapperStyle as="header" id="intro">
      {question.consultationImage ? (
        <IntroBannerTitleStyle>
          <GreatCauseIntroLabelStyle>
            {i18n.t('consultation.header.label')}
          </GreatCauseIntroLabelStyle>
          <span lang={question.language}>
            <Image
              src={question.consultationImage}
              alt={question.consultationImageAlt || question.wording.question}
              height={88}
            />
          </span>
        </IntroBannerTitleStyle>
      ) : (
        <GreatCauseIntroBannerTitleStyle>
          <GreatCauseIntroLabelStyle>
            {i18n.t('consultation.header.label')}
          </GreatCauseIntroLabelStyle>
          <span lang={question.language}>{question.wording.question}</span>
        </GreatCauseIntroBannerTitleStyle>
      )}
    </IntroWrapperStyle>
  ) : (
    <IntroWrapperStyle as="header" id="intro">
      <DefaultBannerMainContainer>
        <DefaultBannerTitleStyle lang={question.language}>
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
};
