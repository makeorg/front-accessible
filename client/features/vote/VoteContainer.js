// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { connect } from 'react-redux';
import { type QualificationType, type VoteType } from 'Shared/types/proposal';
import {
  doVote,
  doUnvote,
  startPendingState,
  finishPendingState,
} from 'Shared/helpers/vote';
import { VoteService } from 'Shared/api/VoteService';
import { sequenceVote, sequenceUnvote } from 'Shared/store/actions/sequence';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
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
  /** Index of the card */
  index?: number,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called on vote */
  handleVoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index?: number
  ) => void,
  /** Method called on unvote */
  handleUnvoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index?: number
  ) => void,
};

type State = {
  /** hasVoted State */
  hasVoted: boolean,
  /** Voted key property */
  votedKey: string,
  /** Array with votes received from Api */
  votes: VoteType[],
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** When waiting response from API */
  pending: boolean,
  /** pending Vote key property */
  pendingVoteKey: string,
};

/**
 * Handles Vote Business Logic
 */
export class VoteHandler extends React.Component<Props, State> {
  static defaultProps = {
    isSequenceCollapsed: false,
    index: undefined,
    currentIndex: undefined,
    goToNextCard: undefined,
  };

  constructor(props: Props) {
    super(props);
    clearTimeout(this.timer);
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
      pending: false,
      pendingVoteKey: '',
    };
  }

  handleUnvote = (voteKey: string) => {
    const {
      proposalId,
      proposalKey,
      index,
      handleUnvoteOnSequence,
    } = this.props;

    VoteService.unvote(proposalId, voteKey, proposalKey)
      .then(vote => {
        this.delayStateUpdateOnEndVote(() =>
          this.setState(prevState => doUnvote(prevState, vote))
        );
        handleUnvoteOnSequence(proposalId, voteKey, index);
      })
      .catch(() => {
        this.setState(finishPendingState);
      });
  };

  handleVote = (voteKey: string) => {
    const { proposalId, proposalKey, index, handleVoteOnSequence } = this.props;
    VoteService.vote(proposalId, voteKey, proposalKey)
      .then(vote => {
        this.delayStateUpdateOnEndVote(() =>
          this.setState(prevState => doVote(prevState, vote))
        );

        handleVoteOnSequence(proposalId, voteKey, index);
      })
      .catch(() => {
        this.setState(finishPendingState);
      });
  };

  handleVoting = (voteKey: string) => {
    this.delayStateUpdateOnStartVote(() =>
      this.setState(prevState => startPendingState(prevState, voteKey))
    );
    const { hasVoted } = this.state;
    if (hasVoted) {
      this.handleUnvote(voteKey);
    } else {
      this.handleVote(voteKey);
    }
  };

  /**
   * Delay the pending display
   */
  delayStateUpdateOnStartVote = (updateStateMethod: () => void) => {
    clearTimeout(this.timer);
    const timeBeforeStartUpdateState = 500;
    this.hasStartedPending = false;
    this.timer = setTimeout(() => {
      this.hasStartedPending = true;
      updateStateMethod();
    }, timeBeforeStartUpdateState);
  };

  /**
   * Pending should be displayed
   * a minimum time
   */
  delayStateUpdateOnEndVote = (updateStateMethod: () => void) => {
    const timeBeforeEndUpdateState = 200;
    clearTimeout(this.timer);
    if (this.hasStartedPending) {
      this.timer = setTimeout(() => {
        updateStateMethod();
      }, timeBeforeEndUpdateState);
    } else {
      updateStateMethod();
    }
    this.hasStartedPending = false;
  };

  timer: TimeoutID;

  hasStartedPending: boolean;

  render() {
    const { proposalId, proposalKey, index, goToNextCard } = this.props;
    const {
      hasVoted,
      votedKey,
      votes,
      qualifications,
      pending,
      pendingVoteKey,
    } = this.state;
    if (hasVoted) {
      return (
        <React.Fragment>
          <VoteStyle.ContainerStyle>
            <VoteResult
              proposalId={proposalId}
              votes={votes}
              votedKey={votedKey}
              index={index}
              handleVote={() => this.handleVoting(votedKey)}
              pending={pending}
            />
            <Qualification
              proposalId={proposalId}
              qualifications={qualifications}
              proposalKey={proposalKey}
              votedKey={votedKey}
              index={index}
              pendingVote={pending}
            />
          </VoteStyle.ContainerStyle>
          {index !== undefined && (
            <NextButtonStyle onClick={goToNextCard} id={`next-button-${index}`}>
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
        handleVote={this.handleVoting}
        pending={pending}
        pendingVoteKey={pendingVoteKey}
        votes={votes}
      />
    );
  }
}

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
  null,
  mapDispatchToProps
)(VoteHandler);
