// @flow
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

import {
  TimelineWrapperStyle,
  TimelineListWrapperStyle,
  TimelineItemTitleStyle,
  TimelineItemDateStyle,
  TimelineItemTextStyle,
  TimelineItemWrapperStyle,
  TimelineTitleStyle,
  TimelineContentStyle,
  TimelineWorkshopLinkStyle,
} from './style';

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
  <TimelineItemWrapperStyle>
    <TimelineItemTitleStyle>{title}</TimelineItemTitleStyle>
    <TimelineItemDateStyle>{dateText}</TimelineItemDateStyle>
    <TimelineItemTextStyle>{description}</TimelineItemTextStyle>
    {withLink && (
      <TimelineWorkshopLinkStyle href="mailto:contact@make.org">
        {i18n.t('consultation.timeline.workshop_link')}
      </TimelineWorkshopLinkStyle>
    )}
  </TimelineItemWrapperStyle>
);

export const Timeline = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { result, workshop, action } = question.timeline;
  const withExtraData: ?QuestionTimelineType = result || workshop || action;

  return (
    <TimelineWrapperStyle>
      <TimelineContentStyle>
        <TimelineTitleStyle>
          {i18n.t('consultation.timeline.timeline_title')}
        </TimelineTitleStyle>
        {!withExtraData ? (
          <TimelineListWrapperStyle as="div">
            <TimelineItem
              title={i18n.t('consultation.timeline.consultation_title')}
              dateText={DateHelper.localizedMonthYear(question.startDate)}
              description={i18n.t(
                'consultation.timeline.consultation_description'
              )}
            />
          </TimelineListWrapperStyle>
        ) : (
          <TimelineListWrapperStyle>
            <li>
              <TimelineItem
                title={i18n.t('consultation.timeline.consultation_title')}
                dateText={DateHelper.localizedMonthYear(question.startDate)}
                description={i18n.t(
                  'consultation.timeline.consultation_description'
                )}
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
                  withLink
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
          </TimelineListWrapperStyle>
        )}
      </TimelineContentStyle>
    </TimelineWrapperStyle>
  );
};
