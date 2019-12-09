// @flow
import * as React from 'react';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import { i18n } from 'Shared/i18n';
import {
  IntroParagraphStyle,
  SharingInnerStyle,
  SharingWrapperStyle,
} from 'Client/features/sequence/Card/Styled/Content';

type Props = {
  text?: string,
};

export const Sharing = ({
  text = i18n.t('final_card.sharing_text'),
}: Props) => (
  <SharingInnerStyle>
    {text.split('\n').map(paragraph => (
      <IntroParagraphStyle key={paragraph}>{paragraph}</IntroParagraphStyle>
    ))}
    <SharingWrapperStyle>
      <SharingProposal />
    </SharingWrapperStyle>
  </SharingInnerStyle>
);
