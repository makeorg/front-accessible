// @flow
import * as React from 'react';
import { SharingContainer } from 'Src/containers/Sharing';
import ProposalCard from '../../Styled';

type Props = {
  /** Special wording for Final Card's Sharinng section */
  wording?: Array<string>,
  /** Tabindex for interactive items */
  tabIndex: number
}

/**
 * Renders finalCard Title component
 */
export class Sharing extends React.Component<Props> {
  static defaultProps = {
    wording: undefined
  }

  render() {
    const {
      wording,
      tabIndex
    } = this.props;

    if (!wording) { return null; }

    return (
      <ProposalCard.SharingInner>
        {wording.map(
          paragraph => (
            <ProposalCard.IntroParagraph key={paragraph}>
              {paragraph}
            </ProposalCard.IntroParagraph>
          )
        )}
        <ProposalCard.SharingWrapper>
          <SharingContainer tabIndex={tabIndex} />
        </ProposalCard.SharingWrapper>
      </ProposalCard.SharingInner>
    );
  }
}
