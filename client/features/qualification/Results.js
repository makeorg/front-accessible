// @flow
import React from 'react';
import { type QualificationType } from 'Shared/types/qualification';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { QualificationLabelStyle, QualificationContentStyle } from './style';

type Props = {
  qualification: QualificationType,
  voteColor: string,
};

export const QualificationResults = ({ qualification, voteColor }: Props) => (
  <SpaceBetweenRowStyle as="li">
    <QualificationLabelStyle color={voteColor}>
      {i18n.t(`qualification.${qualification.qualificationKey}`)}
    </QualificationLabelStyle>
    <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
    <QualificationContentStyle>
      {` ${qualification.count} `}
    </QualificationContentStyle>
    <ScreenReaderItemStyle>
      {i18n.t('qualification.times')}
    </ScreenReaderItemStyle>
  </SpaceBetweenRowStyle>
);
