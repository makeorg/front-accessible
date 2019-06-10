import React from 'react';
import { shallow } from 'enzyme';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { VoteComponent } from './VoteComponent';
import { VoteContainer } from './VoteContainer';
import { VoteContainerStyle } from './Styled';

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
    wrapper = shallow(<VoteContainer {...defaultProps} />);
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

  it('NextButtonStyle should not be rendered if user has not voted yet', () => {
    // check next button is not visible
    const NextButtonWrapper = wrapper.find(NextButtonStyle);
    expect(NextButtonWrapper).toHaveLength(0);
  });

  it('NextButtonStyle should not be rendered if goToNextCard Props is undefined', () => {
    const wrapperWithUndefinedGoToNextCardProps = shallow(
      <VoteContainer proposalId="fooId" votes={[]} />
    );

    // check next button is not visible
    const NextButtonWrapper = wrapperWithUndefinedGoToNextCardProps.find(
      NextButtonStyle
    );
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

    const voteWrapper = shallow(<VoteContainer {...props} />);
    expect(voteWrapper.state().hasVoted).toBe(true);
    expect(voteWrapper.state().votedKey).toBe('agree');
  });
});
