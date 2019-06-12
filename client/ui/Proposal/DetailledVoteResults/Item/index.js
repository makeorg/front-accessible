// @flow
import React from 'react';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { voteStaticParams } from 'Shared/constants/vote';
import { IsVotedButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { QualificationResults } from 'Client/features/vote/Qualification/Results';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  DetailledItemStyle,
  VoteDataListStyle,
  VoteDataBoldItemStyle,
  VoteDataItemStyle,
  QualificationDataListStyle,
} from '../Styled';

type Props = {
  /** Object with vote's properties */
  vote: TypeVote,
  /** Vote percentage */
  votePercent: number,
};

export const DetailledResultItem = (props: Props) => {
  const { vote, votePercent } = props;
  const { voteKey, count } = vote;
  const voteColor = voteStaticParams[voteKey].color;
  const buttonIcon = voteStaticParams[voteKey].icon;

  return (
    <DetailledItemStyle className={voteKey}>
      <FlexElementStyle>
        <ScreenReaderItemStyle>
          {i18n.t(`vote.${voteKey}`)}
        </ScreenReaderItemStyle>
        <IsVotedButtonStyle color={voteColor} as="div" aria-hidden>
          {buttonIcon}
        </IsVotedButtonStyle>
        <VoteDataListStyle>
          <VoteDataBoldItemStyle>
            {i18n.t('common.percent', { percent: votePercent })}
          </VoteDataBoldItemStyle>
          <VoteDataItemStyle>
            {i18n.t('vote.label', { count })}
          </VoteDataItemStyle>
        </VoteDataListStyle>
      </FlexElementStyle>
      <ScreenReaderItemStyle>
        {i18n.t(`qualification.static_repartition`)}
      </ScreenReaderItemStyle>
      <QualificationDataListStyle>
        {vote.qualifications.map(qualification => (
          <QualificationResults
            key={qualification.qualificationKey}
            qualification={qualification}
            voteColor={voteColor}
          />
        ))}
      </QualificationDataListStyle>
    </DetailledItemStyle>
  );
};