import React from 'react';
import { type Question } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import { ExtraTabsInformationsStyle } from 'Client/features/consultation/Styled/Tabs';

type Props = {
  question: Question,
};
export const ConsultationTabContent = (props: Props) => {
  const { question } = props;
  return (
    <React.Fragment>
      {i18n.t('consultation.tabs.consultation')}
      <ExtraTabsInformationsStyle>
        {i18n.t('consultation.tabs.from')}
        <time dateTime={question.startDate}>
          {DateHelper.creationDateFormat(question.startDate)}
        </time>
        {i18n.t('consultation.tabs.to')}
        <time dateTime={question.endDate}>
          {DateHelper.creationDateFormat(question.endDate)}
        </time>
      </ExtraTabsInformationsStyle>
    </React.Fragment>
  );
};
