// @flow
import * as React from 'react';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import { i18n } from 'Shared/i18n';
import {
  SequenceIntroParagraphStyle,
  SequenceSharingInnerStyle,
  SequenceSharingWrapperStyle,
} from 'Client/features/sequence/Deprecated/style';

type Props = {
  text?: string,
};

export const Sharing = ({
  text = i18n.t('final_card.sharing_text'),
}: Props) => (
  <SequenceSharingInnerStyle>
    {text.split('\n').map(paragraph => (
      <SequenceIntroParagraphStyle key={paragraph}>
        {paragraph}
      </SequenceIntroParagraphStyle>
    ))}
    <SequenceSharingWrapperStyle>
      <SharingProposal />
    </SequenceSharingWrapperStyle>
  </SequenceSharingInnerStyle>
);
