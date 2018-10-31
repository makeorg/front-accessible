import React from 'react';
import i18next from 'i18next';
import { connect } from 'react-redux';
import VoteService from '../../api/VoteService';
import { NextButton } from '../../components/ProposalCard/Styled/Buttons';
import Vote from '../../components/Vote/Styled';
import VoteComponent from '../../components/Vote';
import VoteResultsContainer from './Result';
import QualificationContainer from '../Qualification';
import voteStaticParams from '../../constants/vote';

class VoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false,
      votedKey: null,
      qualifications: null
    };

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(event, voteKey) {
    event.preventDefault();
    const { proposalId } = this.props;
    const { hasVoted } = this.state;
    if (hasVoted) {
      VoteService.unvote(proposalId, voteKey)
        .then(() => {
          this.setState({
            hasVoted: false,
            votedKey: null,
            qualifications: null
          });
        });
    } else {
      VoteService.vote(proposalId, voteKey)
        .then((result) => {
          this.setState({
            hasVoted: true,
            votedKey: result.voteKey,
            qualifications: result.qualifications
          });
        });
    }
  }

  render() {
    const {
      proposalId,
      isPannelOpen,
      isSequenceCollapsed,
      index,
      currentIndex,
      goToNextCard
    } = this.props;
    const { hasVoted, votedKey, qualifications } = this.state;
    if (hasVoted) {
      return (
        <React.Fragment>
          <Vote>
            <VoteResultsContainer
              proposalId={proposalId}
              votedKey={votedKey}
              handleVote={this.handleVote}
              tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            />
            <QualificationContainer
              qualifications={qualifications}
              proposalId={proposalId}
              votedKey={votedKey}
              tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            />
          </Vote>
          <NextButton
            tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            onClick={goToNextCard}
          >
            {i18next.t('proposal_card.next')}
          </NextButton>
        </React.Fragment>
      );
    }

    return (
      <VoteComponent
        voteStaticParams={voteStaticParams}
        proposalId={proposalId}
        hasVoted={hasVoted}
        votedKey={votedKey}
        handleVote={this.handleVote}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { isPannelOpen } = state.pannel;


  return {
    isSequenceCollapsed,
    isPannelOpen
  };
};

export default connect(mapStateToProps)(VoteContainer);
