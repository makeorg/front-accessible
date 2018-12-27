/* @flow */
import * as React from 'react';
import PlaceholderCardComponent from 'Components/ProposalCard/PlaceholderCard';
import CollapseToggle from '../Button';
import Sequence from '../Styled';

type Props = {
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when Sliding Pannel is collapsed / expanded */
  isPannelOpen: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleExpandSequence: Function
};

/**
 * Renders Sequence with PlaceholderCard
 */
const SequencePlaceholderComponent = (props: Props) => {
  const {
    isSequenceCollapsed,
    isPannelOpen,
    handleExpandSequence
  } = props;

  return (
    <Sequence
      role="region"
      aria-describedby="introduction"
      className={isSequenceCollapsed ? 'collapsed-sequence' : 'expanded-sequence'}
    >
      <CollapseToggle
        handleExpandSequence={handleExpandSequence}
        isSequenceCollapsed={isSequenceCollapsed}
        isPannelOpen={isPannelOpen}
      />
      <Sequence.Wrapper>
        <Sequence.List className={isSequenceCollapsed ? 'scaled-list' : 'unscaled-list'} as="div" id="sequence">
          <PlaceholderCardComponent />
        </Sequence.List>
      </Sequence.Wrapper>
    </Sequence>
  );
};

export default SequencePlaceholderComponent;