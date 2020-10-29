// @flow
import React from 'react';
import { type VoteType } from 'Shared/types/vote';
import { voteStaticParams } from 'Shared/constants/vote';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { QualificationResults } from 'Client/features/qualification/Results';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  VoteButtonStyle,
  VoteIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import {
  DetailledItemStyle,
  VoteDataListStyle,
  VoteDataBoldItemStyle,
  VoteDataItemStyle,
  QualificationDataListStyle,
} from '../style';

type Props = {
  /** Object with vote's properties */
  vote: VoteType,
  /** Vote percentage */
  votePercent: number,
};

export const DetailledResultItem = (props: Props) => {
  const { vote, votePercent } = props;
  const { voteKey, count } = vote;
  const voteColor = voteStaticParams[voteKey].color;
  return (
    <DetailledItemStyle className={voteKey}>
      <FlexElementStyle>
        <ScreenReaderItemStyle>
          {i18n.t(`vote.${voteKey}`)}
          {' : '}
        </ScreenReaderItemStyle>
        <VoteButtonStyle className={`${voteKey} voted`} as="span">
          <VoteIconStyle className={voteKey} aria-hidden focusable="false" />
        </VoteButtonStyle>
        <VoteDataListStyle as="span">
          <VoteDataBoldItemStyle>
            {i18n.t('common.percent', { percent: votePercent })}
          </VoteDataBoldItemStyle>
          <HiddenItemStyle aria-hidden> (</HiddenItemStyle>
          <VoteDataItemStyle>
            {i18n.t('vote.label', { count })}
          </VoteDataItemStyle>
          <HiddenItemStyle aria-hidden>) </HiddenItemStyle>
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
