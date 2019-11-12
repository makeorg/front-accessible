import React from 'react';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { i18n } from 'Shared/i18n';
import {
  GreatCauseIntroWrapperStyle,
  GreatCauseIntroLabelStyle,
  GreatCauseIntroBannerTitleStyle,
} from '../Styled/IntroBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const GreatCauseBanner = ({
  question,
  questionConfiguration,
}: Props) => (
  <>
    <GreatCauseIntroWrapperStyle
      as="header"
      gradientStart={questionConfiguration.theme.gradientStart}
      gradientEnd={questionConfiguration.theme.gradientEnd}
      backgroundcolor={questionConfiguration.theme.gradientStart}
      id="intro"
    >
      <GreatCauseIntroLabelStyle>
        {i18n.t('consultation.header.label')}
      </GreatCauseIntroLabelStyle>
      {questionConfiguration.consultation.logo ? (
        <h2>
          <img
            src={questionConfiguration.consultation.logo}
            alt={question.wording.question}
          />
        </h2>
      ) : (
        <GreatCauseIntroBannerTitleStyle>
          {question.wording.question}
        </GreatCauseIntroBannerTitleStyle>
      )}
      <NavigationWithTabs question={question} />
    </GreatCauseIntroWrapperStyle>
  </>
);
