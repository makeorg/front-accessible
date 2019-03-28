// @flow
import * as React from 'react';
import { Sharing as SharingProposal } from 'Client/features/sharing';
import {
  IntroParagraphStyle,
  SharingInnerStyle,
  SharingWrapperStyle,
} from '../../Styled/Content';

type Props = {
  /** Special wording for Final Card's Sharinng section */
  text?: Array<string>,
};

/**
 * Renders finalCard Title component
 */
export const Sharing = (props: Props) => {
  const { text } = props;

  if (!text) {
    return null;
  }

  return (
    <SharingInnerStyle>
      {text.map(paragraph => (
        <IntroParagraphStyle key={paragraph}>{paragraph}</IntroParagraphStyle>
      ))}
      <SharingWrapperStyle>
        <SharingProposal />
      </SharingWrapperStyle>
    </SharingInnerStyle>
  );
};
