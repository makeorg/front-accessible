// @flow
import React from 'react';
import { type VoteType } from 'Shared/types/vote';
import { voteStaticParams } from 'Shared/constants/vote';
import {
  IsVotedButtonStyle,
  ButtonIconWrapperStyle,
} from 'Client/ui/Elements/Vote/Styled';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { QualificationResults } from 'Client/features/vote/Qualification/Results';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
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
  const voteTransform = voteStaticParams[voteKey].transform;
  const buttonIcon = <SvgThumbsUp />;

  return (
    <DetailledItemStyle className={voteKey}>
      <FlexElementStyle>
        <ScreenReaderItemStyle>
          {i18n.t(`vote.${voteKey}`)}
          {' : '}
        </ScreenReaderItemStyle>
        <IsVotedButtonStyle color={voteColor} as="span" aria-hidden>
          <ButtonIconWrapperStyle transform={voteTransform}>
            {buttonIcon}
          </ButtonIconWrapperStyle>
        </IsVotedButtonStyle>
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
