// @flow
import React from 'react';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  VoteContainerStyle,
  VoteWrapperStyle,
} from 'Client/features/vote/style';
import { i18n } from 'Shared/i18n';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  VoteButtonStyle,
  QualifyButtonStyle,
  VoteIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import {
  OpinionQualificationListStyle,
  OpinionQualificationListItemStyle,
} from './style';

type Props = {
  voteValue: string,
  unvote: () => void,
  qualifications: string[],
  qualificationValue: string,
  handleQualification: (qualification: string) => void,
};

export const CommitmentQualification = ({
  voteValue,
  unvote,
  qualifications,
  qualificationValue,
  handleQualification,
}: Props) => {
  return (
    <VoteContainerStyle className="opinions">
      <VoteWrapperStyle>
        <ScreenReaderItemStyle as="p">
          {i18n.t(`personality.opinions.vote.${voteValue}`)}
        </ScreenReaderItemStyle>
        <VoteButtonStyle
          aria-label={i18n.t(`personality.opinions.vote.${voteValue}`)}
          className={`${voteValue} voted`}
          data-cy-button="vote"
          data-cy-vote-key={voteValue}
          onClick={unvote}
        >
          <VoteIconStyle
            className={opinionsVoteStaticParams[voteValue]}
            aria-hidden
          />
        </VoteButtonStyle>
        <ScreenReaderItemStyle as="p">
          {i18n.t('qualification.title')}
        </ScreenReaderItemStyle>
        <OpinionQualificationListStyle as={UnstyledListStyle}>
          {qualifications.map(qualification => (
            <OpinionQualificationListItemStyle key={qualification}>
              <QualifyButtonStyle
                className={
                  qualification === qualificationValue ? 'qualified' : ''
                }
                color={opinionsVoteStaticParams[voteValue].color}
                onClick={() => handleQualification(qualification)}
                data-cy-button="qualification"
                data-cy-qualification-key={qualification}
              >
                {i18n.t(`personality.opinions.qualification.${qualification}`)}
              </QualifyButtonStyle>
            </OpinionQualificationListItemStyle>
          ))}
        </OpinionQualificationListStyle>
      </VoteWrapperStyle>
    </VoteContainerStyle>
  );
};
