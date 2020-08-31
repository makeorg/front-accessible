import React from 'react';
import { shallow } from 'enzyme';
import { SequenceNextButtonStyle } from 'Client/features/sequence/Deprecated/style';
import { Vote } from './index';
import { VoteWrapperStyle } from './style';

// doDo: fix test
describe.skip('VoteContainer', () => {
  let wrapper;

  const proposalId = 'fooId';
  const votes = [];
  const index = 1;
  const currentIndex = 1;
  const goToNextCard = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <Vote
        proposalId={proposalId}
        initialVotes={votes}
        index={index}
        currentIndex={currentIndex}
        goToNextCard={goToNextCard}
      />
    );
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
