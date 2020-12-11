import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { DateHelper } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { formatMillionToText } from 'Shared/helpers/numberFormatter';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  FiguresValueStyle,
  FiguresWrapperStyle,
  HigthlightsTitleStyle,
} from './style';

export const Figures = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const remainingDays = DateHelper.getRemainingDays(question.endDate);

  return (
    <FiguresWrapperStyle>
      <ColumnElementStyle as="li">
        <HigthlightsTitleStyle>
          {i18n.t('consultation.highlights.date')}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <strong>
          <FiguresValueStyle
            as="time"
            dateTime={DateHelper.localizedLDate(question.startDate)}
          >
            {DateHelper.localizedllDate(question.startDate)}
          </FiguresValueStyle>
        </strong>
      </ColumnElementStyle>
      <ColumnElementStyle as="li">
        <HigthlightsTitleStyle>
          {i18n.t('consultation.highlights.remaining', {
            count: remainingDays,
          })}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <FiguresValueStyle>{remainingDays}</FiguresValueStyle>
      </ColumnElementStyle>
      <ColumnElementStyle as="li">
        <HigthlightsTitleStyle>
          {i18n.t('consultation.highlights.participant', {
            count: question.highlights.participantsCount,
          })}
        </HigthlightsTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <FiguresValueStyle>
          {formatMillionToText(
            question.highlights.participantsCount,
            country,
            language
          )}
        </FiguresValueStyle>
      </ColumnElementStyle>
    </FiguresWrapperStyle>
  );
};
