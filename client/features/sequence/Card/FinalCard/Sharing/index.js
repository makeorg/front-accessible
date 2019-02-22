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
  wording?: Array<string>,
  /** Tabindex for interactive items */
  tabIndex: number,
};

/**
 * Renders finalCard Title component
 */
export class Sharing extends React.Component<Props> {
  static defaultProps = {
    wording: undefined,
  };

  render() {
    const { wording, tabIndex } = this.props;

    if (!wording) {
      return null;
    }

    return (
      <SharingInnerStyle>
        {wording.map(paragraph => (
          <IntroParagraphStyle key={paragraph}>{paragraph}</IntroParagraphStyle>
        ))}
        <SharingWrapperStyle>
          <SharingProposal tabIndex={tabIndex} />
        </SharingWrapperStyle>
      </SharingInnerStyle>
    );
  }
}
