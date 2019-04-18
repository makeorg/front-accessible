import React from 'react';
import { shallow } from 'enzyme';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { VoteComponent } from './VoteComponent';
import { VoteHandler } from './VoteContainer';
import { VoteContainerStyle } from './Styled';

describe('VoteContainer', () => {
  let wrapper;

  const defaultProps = {
    proposalId: 'fooId',
    votes: [],
    isSequenceCollapsed: true,
    index: 1,
    currentIndex: 1,
    goToNextCard: () => {},
  };

  beforeEach(() => {
    wrapper = shallow(<VoteHandler {...defaultProps} />);
  });

  it('render VoteComponent and passed props', () => {
    const expectedPassedProps = {
      proposalId: defaultProps.proposalId,
      index: 1,
    };

    const voteComponentWrapper = wrapper.find(VoteComponent);
    expect(voteComponentWrapper).toHaveLength(1);
    expect(voteComponentWrapper.props()).toEqual(
      expect.objectContaining(expectedPassedProps)
    );
  });

  it('NextButtonStyle should not be rendered', () => {
    // check next button is not visible
    const NextButtonWrapper = wrapper.find(NextButtonStyle);
    expect(NextButtonWrapper).toHaveLength(0);
  });

  it('render VoteComponent and change state', () => {
    wrapper.setState({ hasVoted: true });
    expect(wrapper.find(VoteComponent)).toHaveLength(0);
    expect(wrapper.find(VoteContainerStyle)).toHaveLength(1);
    const NextButtonWrapper = wrapper.find(NextButtonStyle);
    expect(NextButtonWrapper).toHaveLength(1);

    expect(NextButtonWrapper.props()).toEqual({
      onClick: defaultProps.goToNextCard,
      id: 'next-button-1',
      children: ['proposal_card.next', ' >'],
    });
  });

  it('render initialise state from props', () => {
    const props = {
      ...defaultProps,
      votes: [
        {
          voteKey: 'agree',
          count: 12,
          hasVoted: true,
          qualifications: ['foo', 'bar'],
        },
        {
          voteKey: 'disagree',
          count: 6,
          hasVoted: false,
          qualifications: ['foo', 'bar'],
        },
        {
          voteKey: 'neutral',
          count: 6,
          hasVoted: false,
          qualifications: ['foo', 'bar'],
        },
      ],
    };

    const voteWrapper = shallow(<VoteHandler {...props} />);
    expect(voteWrapper.state().hasVoted).toBe(true);
    expect(voteWrapper.state().votedKey).toBe('agree');
  });
});
