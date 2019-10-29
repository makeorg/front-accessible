import React from 'react';
import { shallow } from 'enzyme';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { Vote } from './index';
import { VoteContainerStyle, VoteWrapperStyle } from './Styled';

describe('VoteContainer', () => {
  let wrapper;

  const defaultProps = {
    proposalId: 'fooId',
    votes: [],
    index: 1,
    currentIndex: 1,
    goToNextCard: () => {},
  };

  beforeEach(() => {
    wrapper = shallow(<Vote {...defaultProps} />);
  });

  it('render VoteComponent and passed props', () => {
    const voteComponentWrapper = wrapper.find(VoteWrapperStyle);
    expect(voteComponentWrapper).toHaveLength(1);
  });

  it('NextButtonStyle should not be rendered if user has not voted yet', () => {
    // check next button is not visible
    const NextButtonWrapper = wrapper.find(NextButtonStyle);
    expect(NextButtonWrapper).toHaveLength(0);
  });

  it('NextButtonStyle should not be rendered if goToNextCard Props is undefined', () => {
    const wrapperWithUndefinedGoToNextCardProps = shallow(
      <Vote proposalId="fooId" votes={[]} />
    );

    // check next button is not visible
    const NextButtonWrapper = wrapperWithUndefinedGoToNextCardProps.find(
      NextButtonStyle
    );
    expect(NextButtonWrapper).toHaveLength(0);
  });

  it('render VoteComponent and change state', () => {
    wrapper.setState({ hasVoted: true });
    expect(wrapper.find(VoteWrapperStyle)).toHaveLength(0);
    expect(wrapper.find(VoteContainerStyle)).toHaveLength(1);
    const NextButtonWrapper = wrapper.find(NextButtonStyle);
    expect(NextButtonWrapper).toHaveLength(1);

    expect(NextButtonWrapper.props()).toEqual({
      onClick: defaultProps.goToNextCard,
      id: 'next-button-fooId',
      children: 'proposal_card.next',
    });
  });

  it('initialise state from props', () => {
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

    const voteWrapper = shallow(<Vote {...props} />);
    expect(voteWrapper.state().hasVoted).toBe(true);
    expect(voteWrapper.state().votedKey).toBe('agree');
  });
});
