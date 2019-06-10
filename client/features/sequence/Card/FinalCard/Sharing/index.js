// @flow
import * as React from 'react';
import { type Sharing as TypeSharing } from 'Shared/types/sequence';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import { i18n } from 'Shared/i18n';
import {
  IntroParagraphStyle,
  SharingInnerStyle,
  SharingWrapperStyle,
} from '../../Styled/Content';

type Props = {
  /** Special wording for Final Card's Sharinng section */
  text?: string,
  /** Sharing params */
  sharingParams?: TypeSharing,
};

/**
 * Renders finalCard Title component
 */
export const Sharing = (props: Props) => {
  const { text, sharingParams } = props;
  const sharingText = text || i18n.t('final_card.sharing_text');

  return (
    <SharingInnerStyle>
      {sharingText.split('\n').map(paragraph => (
        <IntroParagraphStyle key={paragraph}>{paragraph}</IntroParagraphStyle>
      ))}
      <SharingWrapperStyle>
        <SharingProposal sharingParams={sharingParams} />
      </SharingWrapperStyle>
    </SharingInnerStyle>
  );
};
