// @flow
import { chronologicalOrder } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { type QuestionTimelineType } from 'Shared/types/question';

export const buildTimeline = (timeline: {
  result?: QuestionTimelineType,
  workshop?: QuestionTimelineType,
  action?: QuestionTimelineType,
}) => {
  const timelineSteps = [];

  Object.entries(timeline).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    timelineSteps.push({ name: key, ...value });
  });

  return timelineSteps.sort(chronologicalOrder);
};

const RESULT_STEP = 'result';
const WORKSHOP_STEP = 'workshop';
const ACTION_STEP = 'action';

export const getStepTitle = (stepName: string) => {
  switch (stepName) {
    case RESULT_STEP:
      return i18n.t('consultation.timeline.result_title');
    case WORKSHOP_STEP:
      return i18n.t('consultation.timeline.workshop_title');
    case ACTION_STEP:
      return i18n.t('consultation.timeline.action_title');
    default:
      return null;
  }
};
