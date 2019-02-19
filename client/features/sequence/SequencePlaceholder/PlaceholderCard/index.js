import * as React from 'react';
import { ProposalCardStyle } from 'Client/features/sequence/Card/Styled';
import {
  PlaceholderWrapperStyle,
  PlaceholderTitleSTyle,
  PlaceholderSeparatorStyle,
  PlaceholderDescriptionStyle,
  PlaceholderButtonStyle
} from 'Client/features/sequence/Card/Styled/Placeholder';

/**
 * Renders Proposal Placeholder used when the Sequence is loading
 */
export const PlaceholderCardComponent = () => (
  <ProposalCardStyle
    as="div"
    scale="1"
    zindex="1"
  >
    <PlaceholderWrapperStyle>
      <PlaceholderTitleSTyle />
      <PlaceholderSeparatorStyle />
      <PlaceholderDescriptionStyle />
      <PlaceholderDescriptionStyle />
      <PlaceholderButtonStyle />
    </PlaceholderWrapperStyle>
  </ProposalCardStyle>
);
