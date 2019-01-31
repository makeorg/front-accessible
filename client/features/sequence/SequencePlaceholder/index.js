/* @flow */
import * as React from 'react';
import PlaceholderCardComponent from './PlaceholderCard';
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
      isSequenceCollapsed={isSequenceCollapsed}
    >
      <CollapseToggle
        handleExpandSequence={handleExpandSequence}
        isSequenceCollapsed={isSequenceCollapsed}
        isPannelOpen={isPannelOpen}
      />
      <Sequence.Wrapper>
        <Sequence.List isSequenceCollapsed={isSequenceCollapsed} as="div" id="sequence">
          <PlaceholderCardComponent />
        </Sequence.List>
      </Sequence.Wrapper>
    </Sequence>
  );
};

export default SequencePlaceholderComponent;
