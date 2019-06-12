import React from 'react';
import renderer from 'react-test-renderer';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { VoteProgress } from './index';

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('../Styled/Progress', () => ({
  VoteProgressContainerStyle: 'VoteProgressContainerStyle',
  VoteProgressWrapperStyle: 'VoteProgressWrapperStyle',
  VoteCounterStyle: 'VoteCounterStyle',
  VoteProgressItemStyle: 'VoteProgressItemStyle',
}));

describe('VoteProgress', () => {
  const defaultProps = {
    votes: proposalTypeFixture.votes,
    proposalId: proposalTypeFixture.id,
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<VoteProgress {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
