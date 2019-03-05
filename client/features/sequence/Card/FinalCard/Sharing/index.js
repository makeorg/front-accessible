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
  /** Tabindex for interactive items */
  tabIndex: number,
};

/**
 * Renders finalCard Title component
 */
export class Sharing extends React.Component<Props> {
  render() {
    const { text, tabIndex } = this.props;

    if (!text) {
      return null;
    }

    return (
      <SharingInnerStyle>
        {text.map(paragraph => (
          <IntroParagraphStyle key={paragraph}>{paragraph}</IntroParagraphStyle>
        ))}
        <SharingWrapperStyle>
          <SharingProposal tabIndex={tabIndex} />
        </SharingWrapperStyle>
      </SharingInnerStyle>
    );
  }
}
