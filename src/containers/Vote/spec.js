import { shallow } from 'enzyme';
import { Vote } from './index';
import VoteComponent from '../../components/Vote';
import VoteStyled from '../../components/Vote/Styled';
import { NextButton } from '../../components/ProposalCard/Styled/Buttons';

describe('VoteContainer', () => {
  let wrapper;
  const defaultProps = {
    proposalId: 'fooId',
    isPannelOpen: true,
    isSequenceCollapsed: true,
    index: 1,
    currentIndex: 1,
    goToNextCard: () => {}
  };

  beforeEach(() => {
    wrapper = shallow(<Vote {...defaultProps}/>);
  });

  it('render VoteComponent and passed props', () => {
    const expectedPassedProps = {
      proposalId: defaultProps.proposalId,
      index: 1,
      tabIndex: -1
    }

    const voteComponentWrapper = wrapper.find(VoteComponent);
    expect(voteComponentWrapper).to.have.length(1);
    expect(voteComponentWrapper.props()).to.include(expectedPassedProps);
  });

  it('render VoteComponent and change state', () => {
    wrapper.setState({ hasVoted: true });
    expect(wrapper.find(VoteComponent)).to.have.length(0);
    expect(wrapper.find(VoteStyled)).to.have.length(1);
    const NextButtonWrapper = wrapper.find(NextButton);
    expect(NextButtonWrapper).to.have.length(1);

    expect(NextButtonWrapper.props()).to.deep.equal({
      tabIndex: -1,
      onClick: defaultProps.goToNextCard,
      id: "next-button-1",
      children: undefined
    });

  });
});
