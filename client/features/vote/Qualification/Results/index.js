// @flow
import React from 'react';
import { type QualificationType } from 'Shared/types/proposal';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
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
      <QualificationContStyle>{count}</QualificationContStyle>
    </SpaceBetweenRowStyle>
  );
};
