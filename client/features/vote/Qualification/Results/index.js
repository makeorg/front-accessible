// @flow
import React from 'react';
import { type QualificationType } from 'Shared/types/qualification';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { QualificationLabelStyle, QualificationContStyle } from './Styled';

type Props = {
  qualification: QualificationType,
  voteColor: string,
};

export const QualificationResults = (props: Props) => {
  const { qualification, voteColor } = props;
  const { qualificationKey, count } = qualification;

  return (
    <SpaceBetweenRowStyle as="li">
      <QualificationLabelStyle color={voteColor}>
        {i18n.t(`qualification.${qualificationKey}`)}
      </QualificationLabelStyle>
      <ScreenReaderItemStyle> : </ScreenReaderItemStyle>
      <QualificationContStyle>{` ${count} `}</QualificationContStyle>
      <ScreenReaderItemStyle>
        {i18n.t('qualification.times')}
      </ScreenReaderItemStyle>
    </SpaceBetweenRowStyle>
  );
};
