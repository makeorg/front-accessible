// @flow
import React from 'react';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import { i18n } from 'Shared/i18n';
import { SequenceParagraphStyle } from 'Client/features/sequence/Cards/style';
import { SequenceShareInnerStyle, SequenceShareSeparatorStyle } from './style';

type Props = {
  text?: string,
};

export const Sharing = ({
  text = i18n.t('final_card.sharing_text'),
}: Props) => (
  <>
    <SequenceShareInnerStyle>
      {text.split('\n').map(paragraph => (
        <SequenceParagraphStyle key={paragraph} as="p">
          {paragraph}
        </SequenceParagraphStyle>
      ))}
      <SharingProposal />
    </SequenceShareInnerStyle>
    <SequenceShareSeparatorStyle />
  </>
);
