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
    <ProposalCard.SharingWrapper>
      {wording.map(
        paragraph => (
          <ProposalCard.IntroParagraph key={paragraph}>
            {paragraph}
          </ProposalCard.IntroParagraph>
        )
      )}
      <SharingContainer />
    </ProposalCard.SharingWrapper>
  );
};

export default Sharing;
