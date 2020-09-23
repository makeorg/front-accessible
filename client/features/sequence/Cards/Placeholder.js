// @flow
import React from 'react';
import {
  SequencePlaceholderRoundStyle,
  SequencePlaceholderLineStyle,
  SequencePlaceholderVoteWrapperStyle,
  SequenceCardStyle,
} from './style';

/**
 * Handles Proposal Card Business Logic
 */
export const SequencePlaceholderCard = () => (
  <SequenceCardStyle>
    <SequencePlaceholderRoundStyle className="avatar" />
    <SequencePlaceholderLineStyle className="small name" />
    <SequencePlaceholderLineStyle className="medium proposal" />
    <SequencePlaceholderLineStyle className="large proposal" />
    <SequencePlaceholderLineStyle className="medium" />
    <SequencePlaceholderVoteWrapperStyle>
      <SequencePlaceholderRoundStyle />
      <SequencePlaceholderRoundStyle />
      <SequencePlaceholderRoundStyle />
    </SequencePlaceholderVoteWrapperStyle>
  </SequenceCardStyle>
);
