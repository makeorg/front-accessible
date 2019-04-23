// @flow
import React from 'react';
import { type VoteType } from 'Shared/types/proposal';
import { voteStaticParams } from 'Shared/constants/vote';
import { UnvoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { QualificationResults } from 'Client/features/vote/Qualification/Results';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  DetailledItemWrapperStyle,
  VoteDataListStyle,
  VoteDataBoldItemStyle,
  VoteDataItemStyle,
} from '../Styled';
import { QualificationDataListStyle } from '../../Qualification/Results/Styled';

type Props = {
  vote: VoteType,
  votePercent: number,
};

export const DetailledResultItem = (props: Props) => {
  const { vote, votePercent } = props;
  const { voteKey, count } = vote;
  const voteColor = voteStaticParams[voteKey].color;
  const buttonIcon = voteStaticParams[voteKey].icon;

  return (
    <DetailledItemWrapperStyle className={voteKey}>
      <FlexElementStyle>
        <HiddenItemStyle>{i18n.t('results.title')}</HiddenItemStyle>
        <UnvoteButtonStyle
          color={voteColor}
          as="div"
          aria-label={i18n.t(`vote.${voteKey}`)}
        >
          {buttonIcon}
        </UnvoteButtonStyle>
        <VoteDataListStyle>
          <VoteDataBoldItemStyle>
            {i18n.t('common.percent', { percent: votePercent })}
          </VoteDataBoldItemStyle>
          <VoteDataItemStyle>
            {i18n.t('vote.label', { count })}
          </VoteDataItemStyle>
        </VoteDataListStyle>
      </FlexElementStyle>
      <QualificationDataListStyle>
        {vote.qualifications.map(qualification => (
          <QualificationResults
            key={qualification.qualificationKey}
            qualification={qualification}
            voteColor={voteColor}
          />
        ))}
      </QualificationDataListStyle>
    </DetailledItemWrapperStyle>
  );
};
