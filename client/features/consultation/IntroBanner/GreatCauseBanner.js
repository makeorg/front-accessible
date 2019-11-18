import React from 'react';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import {
  GreatCauseIntroWrapperStyle,
  GreatCauseIntroLabelStyle,
  GreatCauseIntroBannerTitleStyle,
} from '../Styled/IntroBanner';

type Props = {
  question: TypeQuestion,
};

export const GreatCauseBanner = ({ question }: Props) => (
  <>
    <GreatCauseIntroWrapperStyle
      as="header"
      gradientStart={question.theme.gradientStart}
      gradientEnd={question.theme.gradientEnd}
      backgroundcolor={question.theme.gradientStart}
      id="intro"
    >
      <GreatCauseIntroLabelStyle>
        {i18n.t('consultation.header.label')}
      </GreatCauseIntroLabelStyle>
      {question.consultationImage ? (
        <h2 style={{ color: question.theme.fontColor }}>
          <img
            src={question.consultationImage}
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
