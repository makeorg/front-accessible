// @flow
import React from 'react';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import { i18n } from 'Shared/i18n';
import { SequenceFinalParagraphStyle } from 'Client/features/sequence/Deprecated/style';
import {
  SequenceSharingInnerStyle,
  SequenceSharingWrapperStyle,
} from './style';

type Props = {
  text?: string,
};

export const Sharing = ({
  text = i18n.t('final_card.sharing_text'),
}: Props) => (
  <SequenceSharingInnerStyle>
    {text.split('\n').map(paragraph => (
      <SequenceFinalParagraphStyle key={paragraph}>
        {paragraph}
      </SequenceFinalParagraphStyle>
    ))}
    <SequenceSharingWrapperStyle>
      <SharingProposal />
    </SequenceSharingWrapperStyle>
  </SequenceSharingInnerStyle>
);
