/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { connect } from 'react-redux';
import { type QualificationType, type VoteType } from 'Shared/types/proposal';
import { throttle } from 'Shared/helpers/throttle';
import { doVote, doUnvote } from 'Shared/helpers/vote';
import { VoteService } from 'Shared/api/VoteService';
import { sequenceVote, sequenceUnvote } from 'Shared/store/actions/sequence';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import { Qualification } from './Qualification';
import { VoteComponent } from './VoteComponent';
import { VoteResult } from './Result';
import * as VoteStyle from './Styled';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array with votes received from Api */
  votes: VoteType[],
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen?: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed?: boolean,
  /** Index of the card */
  index?: number,
  /** Incremented / Decremented Index */
  currentIndex?: number,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called on vote */
  handleVoteOnSequence: (string, string, ?number) => void,
  /** Method called on unvote */
  handleUnvoteOnSequence: (string, string, ?number) => void,
};

type State = {
  /** Tabindex for interactive items */
  hasVoted: boolean,
  /** Voted key property */
  votedKey: string,
  /** Array with votes received from Api */
  votes: VoteType[],
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
};

/**
 * Handles Vote Business Logic
 */
export class VoteHandler extends React.Component<Props, State> {
  static defaultProps = {
    isPannelOpen: false,
    isSequenceCollapsed: false,
    index: undefined,
    currentIndex: undefined,
    goToNextCard: undefined,
  };

  throttleVote: any = undefined;

  constructor(props: Props) {
    super(props);
    const userVote =
      props.votes && props.votes.find(vote => vote.hasVoted === true);
    const hasVoted = userVote !== undefined;
    const votedKey = userVote !== undefined ? userVote.voteKey : '';
    const qualifications =
      userVote !== undefined ? userVote.qualifications : [];

    this.state = {
      hasVoted,
      votedKey,
      qualifications,
      votes: props.votes,
    };
    this.throttleVote = throttle(this.handleVote);
  }

  handleVote = (event: SyntheticEvent<*>, voteKey: string) => {
    event.preventDefault();
    const {
      proposalId,
      proposalKey,
      index,
      handleVoteOnSequence,
      handleUnvoteOnSequence,
    } = this.props;
    const { hasVoted } = this.state;

    if (hasVoted) {
      VoteService.unvote(proposalId, voteKey, proposalKey).then(vote => {
        this.setState(prevState => doUnvote(prevState, vote));
        handleUnvoteOnSequence(proposalId, voteKey, index);
      });
    } else {
      VoteService.vote(proposalId, voteKey, proposalKey).then(vote => {
        this.setState(prevState => doVote(prevState, vote));
        handleVoteOnSequence(proposalId, voteKey, index);
      });
    }
  };

  render() {
    const {
      proposalId,
      isPannelOpen,
      isSequenceCollapsed,
      index,
      currentIndex,
      goToNextCard,
    } = this.props;
    const { hasVoted, votedKey, votes, qualifications } = this.state;
    const tabIndex =
      isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0;

    if (hasVoted) {
      return (
        <React.Fragment>
          <VoteStyle.ContainerStyle>
            <VoteResult
              proposalId={proposalId}
              votes={votes}
              votedKey={votedKey}
              index={index}
              handleVote={this.throttleVote}
              tabIndex={tabIndex}
            />
            <Qualification
              proposalId={proposalId}
              qualifications={qualifications}
              votedKey={votedKey}
              index={index}
              tabIndex={tabIndex}
            />
          </VoteStyle.ContainerStyle>
          {index !== undefined && (
            <NextButtonStyle
              tabIndex={tabIndex}
              onClick={goToNextCard}
              id={`next-button-${index}`}
            >
              {i18n.t('proposal_card.next')}
              {' >'}
            </NextButtonStyle>
          )}
        </React.Fragment>
      );
    }

    return (
      <VoteComponent
        proposalId={proposalId}
        index={index}
        tabIndex={tabIndex}
        handleVote={this.throttleVote}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPannelOpen } = state.pannel;

  return {
    isSequenceCollapsed: selectSequenceCollapsed(state),
    isPannelOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  handleVoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => {
    dispatch(sequenceVote(proposalId, voteKey, index));
  },
  handleUnvoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => {
    dispatch(sequenceUnvote(proposalId, voteKey, index));
  },
});

export const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteHandler);
