// @flow
import React from 'react';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { voteStaticParams } from 'Shared/constants/vote';
import { IsVotedButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { QualificationResults } from 'Client/features/vote/Qualification/Results';
import { ReadableItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  DetailledItemStyle,
  VoteDataListStyle,
  VoteDataBoldItemStyle,
  VoteDataItemStyle,
} from '../Styled';
import { QualificationDataListStyle } from '../../Qualification/Results/Styled';

type Props = {
  vote: TypeVote,
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
        <ReadableItemStyle>{i18n.t(`vote.${voteKey}`)}</ReadableItemStyle>
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
      <ReadableItemStyle>
        {i18n.t(`qualification.static_repartition`)}
      </ReadableItemStyle>
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
