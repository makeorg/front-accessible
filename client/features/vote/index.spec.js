import React from 'react';
import { shallow } from 'enzyme';
import { SequenceNextButtonStyle } from 'Client/features/sequence/style';
import { Vote } from './index';
import { VoteWrapperStyle } from './style';

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

  it('SequenceNextButtonStyle should not be rendered if goToNextCard Props is undefined', () => {
    const wrapperWithUndefinedGoToNextCardProps = shallow(
      <Vote proposalId="fooId" votes={[]} />
    );

    // check next button is not visible
    const NextButtonWrapper = wrapperWithUndefinedGoToNextCardProps.find(
      SequenceNextButtonStyle
    );
    expect(NextButtonWrapper).toHaveLength(0);
  });
});
