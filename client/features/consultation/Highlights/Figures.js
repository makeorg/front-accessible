import React from 'react';
import { useLocation } from 'react-router';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { DateHelper } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { isResultsPage } from 'Shared/routes';
import { formatMillionToText } from 'Shared/helpers/numberFormatter';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  FiguresValueStyle,
  FiguresListStyle,
  FiguresListItemStyle,
  HigthlightsTitleStyle,
} from './style';

export const Figures = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const remainingDays = DateHelper.getRemainingDays(question.endDate);
  const location = useLocation();
  const resultsPage = isResultsPage(location.pathname);

  return (
    <FiguresListStyle>
      <FiguresListItemStyle>
        <HigthlightsTitleStyle>
          {resultsPage
            ? i18n.t('consultation.highlights.end_date')
            : i18n.t('consultation.highlights.start_date')}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <FiguresValueStyle
          className="padding-right"
          as="time"
          dateTime={
            resultsPage
              ? DateHelper.localizedLDate(question.endDate)
              : DateHelper.localizedLDate(question.startDate)
          }
        >
          {resultsPage
            ? DateHelper.localizedllDate(question.endDate)
            : DateHelper.localizedllDate(question.startDate)}
        </FiguresValueStyle>
      </FiguresListItemStyle>
      <FiguresListItemStyle>
        <HigthlightsTitleStyle>
          {resultsPage
            ? i18n.t('consultation.highlights.proposals')
            : i18n.t('consultation.highlights.remaining', {
                count: remainingDays,
              })}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <FiguresValueStyle>
          {resultsPage ? question.highlights.proposalsCount : remainingDays}
        </FiguresValueStyle>
      </FiguresListItemStyle>
      <FiguresListItemStyle>
        <HigthlightsTitleStyle>
          {i18n.t('consultation.highlights.participant', {
            count: question.highlights.participantsCount,
          })}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <FiguresValueStyle className="mobile-extra-margin-bottom">
          {formatMillionToText(question.highlights.participantsCount, language)}
        </FiguresValueStyle>
      </FiguresListItemStyle>
    </FiguresListStyle>
  );
};
