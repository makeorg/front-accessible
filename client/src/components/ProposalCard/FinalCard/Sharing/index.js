// @flow
import * as React from 'react';
import SharingContainer from 'Containers/Sharing';
import ProposalCard from '../../Styled';

type Props = {
  /** Special wording for Final Card's Sharinng section */
  wording: Array<string>
}

/**
 * Renders finalCard Title component
 */
const Sharing = (props: Props) => {
  const {
    wording
  } = props;

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
        <SharingContainer />
      </ProposalCard.SharingWrapper>
    </ProposalCard.SharingInner>
  );
};

export default Sharing;
