// @flow
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import React from 'react';
import { useSelector } from 'react-redux';
import { DateHelper } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type StateRoot } from 'Shared/store/types';
import {
  type QuestionType,
  type QuestionTimelineType,
} from 'Shared/types/question';

type Props = {
  title: string,
  dateText: string,
  description: string,
  withLink?: boolean,
};

const TimelineItem = ({
  title,
  dateText,
  description,
  withLink = false,
}: Props) => (
  <>
    {title}
    {dateText}
    {description}
    {withLink && 'worskopLink'}
  </>
);

export const Timeline = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { result, workshop, action } = question.timeline;
  const withExtraData: ?QuestionTimelineType = result || workshop || action;

  if (!withExtraData) {
    <TimelineItem
      title={i18n.t('consultation.timeline.consultation_title')}
      dateText={DateHelper.localizedMonthYear(question.startDate)}
      description={i18n.t('consultation.timeline.consultation_description')}
    />;
  }
  return (
    <UnstyledListStyle>
      <li>
        <TimelineItem
          title={i18n.t('consultation.timeline.consultation_title')}
          dateText={DateHelper.localizedMonthYear(question.startDate)}
          description={i18n.t('consultation.timeline.consultation_description')}
        />
      </li>
      {result && (
        <li>
          <TimelineItem
            title={i18n.t('consultation.timeline.result_title')}
            dateText={result.dateText}
            description={result.description}
          />
        </li>
      )}
      {workshop && (
        <li>
          <TimelineItem
            title={i18n.t('consultation.timeline.workshop_title')}
            dateText={workshop.dateText}
            description={workshop.description}
          />
        </li>
      )}
      {action && (
        <li>
          <TimelineItem
            title={i18n.t('consultation.timeline.action_title')}
            dateText={action.dateText}
            description={action.description}
          />
        </li>
      )}
    </UnstyledListStyle>
  );
};
