import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import React from 'react';
import { type QuestionHighlightsType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { getVotesRatio } from 'Shared/helpers/voteResult';
import { formatCountWithLanguage } from 'Shared/helpers/numberFormatter';
import {
  ProgressWrapperStyle,
  ProgressInnerStyle,
  ProgressTitleStyle,
  VotesTargetStyle,
  ProgressBarContainerStyle,
  ProgressBarStyle,
  ProgressParticipateStyle,
  ProgressDescriptionStyle,
  ParticipateButtonStyle,
  ParticipateButtonIconStyle,
} from './style';

export const Progress = () => {
  const {
    highlights,
    language,
  }: {
    highlights: QuestionHighlightsType,
    language: string,
  } = useSelector((state: StateRoot) => selectCurrentQuestion(state));
  const { votesCount, votesTarget } = highlights;
  const votesPercent = getVotesRatio(votesCount, votesTarget);

  return (
    <ProgressWrapperStyle>
      <ProgressInnerStyle>
        <ProgressTitleStyle as="h3">
          {i18n.t('consultation.highlights.progress_title')}
        </ProgressTitleStyle>
        <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
        <VotesTargetStyle
          dangerouslySetInnerHTML={{
            __html: i18n.t('consultation.highlights.progress_target', {
              votesCount: formatCountWithLanguage(votesCount, language),
              votesTarget: formatCountWithLanguage(votesTarget, language),
              percent: votesPercent,
            }),
          }}
        />
        <ProgressBarContainerStyle>
          <ProgressBarStyle percent={votesPercent} />
        </ProgressBarContainerStyle>
        <ProgressParticipateStyle>
          <ProgressDescriptionStyle>
            {i18n.t('consultation.highlights.progress_description')}
          </ProgressDescriptionStyle>
          <ParticipateButtonStyle>
            {i18n.t('consultation.highlights.progress_btn')}
            <ParticipateButtonIconStyle aria-hidden focusable="false" />
          </ParticipateButtonStyle>
        </ProgressParticipateStyle>
      </ProgressInnerStyle>
    </ProgressWrapperStyle>
  );
};
