import { shallow } from 'enzyme';
import i18next from 'i18next';
import { Vote } from './index';
import VoteComponent from 'Src/components/Vote';
import VoteStyled from 'Src/components/Vote/Styled';
import { NextButton } from 'Src/components/ProposalCard/Styled/Buttons';

describe('VoteContainer', () => {
  let wrapper;

  const defaultProps = {
    proposalId: 'fooId',
    votes: [],
    isPannelOpen: true,
    isSequenceCollapsed: true,
    index: 1,
    currentIndex: 1,
    goToNextCard: () => { }
  };

  beforeEach(() => {
    wrapper = shallow(<Vote {...defaultProps} />);
  });

  it('render VoteComponent and passed props', () => {
    const expectedPassedProps = {
      proposalId: defaultProps.proposalId,
      index: 1,
      tabIndex: -1
    }

    const voteComponentWrapper = wrapper.find(VoteComponent);
    expect(voteComponentWrapper).toHaveLength(1);
    expect(voteComponentWrapper.props()).toEqual(expect.objectContaining(expectedPassedProps));
  });

  it('NextButton should not be rendered', () => {
    // check next button is not visible
    const NextButtonWrapper = wrapper.find(NextButton);
    expect(NextButtonWrapper).toHaveLength(0);
  });

  it('render VoteComponent and change state', () => {

    wrapper.setState({ hasVoted: true });
    expect(wrapper.find(VoteComponent)).toHaveLength(0);
    expect(wrapper.find(VoteStyled)).toHaveLength(1);
    const NextButtonWrapper = wrapper.find(NextButton);
    expect(NextButtonWrapper).toHaveLength(1);

    expect(NextButtonWrapper.props()).toEqual({
      tabIndex: -1,
      onClick: defaultProps.goToNextCard,
      id: "next-button-1",
      children: [
        "proposal_card.next",
        ' >'
      ]
    });

  });

  it('render initialise state from props', () => {
    const props = {
      ...defaultProps,
      votes: [{
        voteKey: "agree",
        count: 12,
        hasVoted: true,
        qualifications: ['foo', 'bar']
      }, {
        voteKey: "disagree",
        count: 6,
        hasVoted: false,
        qualifications: ['foo', 'bar']
      }, {
        voteKey: "neutral",
        count: 6,
        hasVoted: false,
        qualifications: ['foo', 'bar']
      }]
    }

    const voteWrapper = shallow(<Vote {...props} />);
    expect(voteWrapper.state().hasVoted).toBe(true);
    expect(voteWrapper.state().votedKey).toBe("agree");
  });
});
