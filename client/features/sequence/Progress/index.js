// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useSelector, useDispatch } from 'react-redux';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { decrementSequenceIndex } from 'Shared/store/actions/sequence';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import { pxToPercent } from 'Shared/helpers/styled';
import {
  ProgressPreviousButtonStyle,
  ProgressIconStyle,
  ProgressCounterStyle,
  ProgressBarWrapperStyle,
  ProgressBarStyle,
} from './style';

export const SequenceProgress = () => {
  const dispatch = useDispatch();
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { cards, currentIndex } = useSelector(
    (state: StateRoot) => state.sequence
  );
  const index = currentIndex + 1;
  const total = cards.length;

  return (
    <ThemeProvider theme={question.theme}>
      <SpaceBetweenRowStyle className="fullwidth">
        <ProgressPreviousButtonStyle
          onClick={() => dispatch(decrementSequenceIndex())}
          disabled={currentIndex === 0}
          aria-label={i18n.t('sequence_progress.previous')}
        >
          <ProgressIconStyle aria-hidden />
        </ProgressPreviousButtonStyle>
        <ScreenReaderItemStyle aria-live="polite">
          {i18n.t('sequence_progress.counter', {
            current: index,
            total,
          })}
        </ScreenReaderItemStyle>
        <ProgressCounterStyle aria-hidden>
          {`${index}/${total}`}
        </ProgressCounterStyle>
        <ProgressBarWrapperStyle>
          <ProgressBarStyle percentWidth={pxToPercent(index, total)} />
        </ProgressBarWrapperStyle>
      </SpaceBetweenRowStyle>
    </ThemeProvider>
  );
};
