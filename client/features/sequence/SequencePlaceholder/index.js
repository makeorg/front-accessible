/* @flow */
import * as React from 'react';
import { PlaceholderCardComponent } from './PlaceholderCard';
import { CollapseToggle } from '../Button';
import { SequenceStyle, WrapperStyle, ListStyle } from '../Styled';

/**
 * Renders Sequence with PlaceholderCard
 */
export const SequencePlaceholderComponent = () => {
  return (
    <SequenceStyle>
      <CollapseToggle />
      <WrapperStyle>
        <ListStyle as="div" id="sequence">
          <PlaceholderCardComponent />
        </ListStyle>
      </WrapperStyle>
    </SequenceStyle>
  );
};
