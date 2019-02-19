/* @flow */
import * as React from 'react';
import { PlaceholderCardComponent } from './PlaceholderCard';
import { CollapseToggle } from '../Button';
import { SequenceStyle, WrapperStyle, ListStyle } from '../Styled';

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
export const SequencePlaceholderComponent = (props: Props) => {
  const {
    isSequenceCollapsed,
    isPannelOpen,
    handleExpandSequence
  } = props;

  return (
    <SequenceStyle
      role="region"
      aria-describedby="introduction"
      isSequenceCollapsed={isSequenceCollapsed}
    >
      <CollapseToggle
        handleExpandSequence={handleExpandSequence}
        isSequenceCollapsed={isSequenceCollapsed}
        isPannelOpen={isPannelOpen}
      />
      <WrapperStyle>
        <ListStyle isSequenceCollapsed={isSequenceCollapsed} as="div" id="sequence">
          <PlaceholderCardComponent />
        </ListStyle>
      </WrapperStyle>
    </SequenceStyle>
  );
};
