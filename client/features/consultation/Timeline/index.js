// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { DateHelper, isCurrentStep } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type StateRoot } from 'Shared/store/types';
import { isGreatCause } from 'Shared/helpers/question';
import { CONTACT_EMAIL } from 'Shared/constants/config';
import { type QuestionType } from 'Shared/types/question';
import { isBetaResultsPage } from 'Shared/routes';
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
  TimelineItemMarkerIsCurrent,
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
  isCurrent = false,
}: Props) => (
  <TimelineItemWrapperStyle>
    <TimelineItemTitleStyle>
      {title}
      {isCurrent && <TimelineItemMarkerIsCurrent />}
    </TimelineItemTitleStyle>
    <TimelineItemDateStyle>{dateText}</TimelineItemDateStyle>
    <TimelineItemTextStyle>{description}</TimelineItemTextStyle>
    {withLink && (
      <TimelineWorkshopLinkStyle href={`mailto:${CONTACT_EMAIL}`}>
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
  const oneStepTimeline = !result && !workshop && !action;
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const location = useLocation();
  const resultsPage = isBetaResultsPage(location.pathname);

  const firstStepDateText = resultsPage
    ? i18n.t('consultation.timeline.consultation_from_to', {
        startDate: DateHelper.localizedDayMonth(question.startDate),
        endDate: DateHelper.localizedDayMonthYear(question.endDate),
      })
    : DateHelper.localizedMonthYear(question.startDate);

  return (
    <TimelineWrapperStyle>
      <TimelineContentStyle>
        <TimelineTitleStyle>
          {questionIsGreatCause
            ? i18n.t('consultation.timeline.timeline_title_great_cause')
            : i18n.t('consultation.timeline.timeline_title_consultation')}
        </TimelineTitleStyle>
        {oneStepTimeline ? (
          <TimelineListWrapperStyle as="div">
            <TimelineItem
              title={i18n.t('consultation.timeline.consultation_title')}
              dateText={firstStepDateText}
              description={i18n.t(
                'consultation.timeline.consultation_description'
              )}
              isCurrent
            />
          </TimelineListWrapperStyle>
        ) : (
          <TimelineListWrapperStyle>
            <li>
              <TimelineItem
                title={i18n.t('consultation.timeline.consultation_title')}
                dateText={firstStepDateText}
                description={i18n.t(
                  'consultation.timeline.consultation_description'
                )}
                isCurrent={isCurrentStep(question, result)}
              />
            </li>
            {result && (
              <li>
                <TimelineItem
                  title={i18n.t('consultation.timeline.result_title')}
                  dateText={result.dateText}
                  description={result.description}
                  isCurrent={isCurrentStep(result, workshop)}
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
                  isCurrent={isCurrentStep(workshop, action)}
                />
              </li>
            )}
            {action && (
              <li>
                <TimelineItem
                  title={i18n.t('consultation.timeline.action_title')}
                  dateText={action.dateText}
                  description={action.description}
                  isCurrent={isCurrentStep(action, question)}
                />
              </li>
            )}
          </TimelineListWrapperStyle>
        )}
      </TimelineContentStyle>
    </TimelineWrapperStyle>
  );
};
