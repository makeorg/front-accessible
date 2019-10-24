// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { trackVote, trackUnvote } from 'Shared/services/Tracking';
import {
  type QualificationType,
  type Vote as TypeVote,
} from 'Shared/types/proposal';
import {
  doVote,
  doUnvote,
  startPendingState,
  finishPendingState,
  startAnimatingVoteState,
  getVoteKey,
} from 'Shared/helpers/vote';
import { VoteService } from 'Shared/api/VoteService';
import { NextButtonStyle } from 'Client/features/sequence/Card/Styled/Buttons';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { Qualification } from './Qualification';
// import { VoteComponent, VoteButtonsComponent } from './VoteComponent';
import { VoteResult } from './Result';
import { VoteContainerStyle, VoteWrapperStyle } from './Styled';
import { VoteButton } from './Button';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array with votes received from Api */
  votes: TypeVote[],
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Index of the card */
  index: number,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called when Vote */
  onVote: (proposalId: string, voteKey: string, index: number) => void,
  /** Method called when Unvote */
  onUnvote: (proposalId: string, voteKey: string, index: number) => void,
};

type State = {
  /** hasVoted State */
  hasVoted: boolean,
  /** Voted key property */
  votedKey: string,
  /** Array with votes received from Api */
  votes: TypeVote[],
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** When waiting response from API */
  pending: boolean,
  /** Trigged animation on vote button after API response */
  animateVote: boolean,
  /** pending Vote key property */
  pendingVoteKey: string,
};

/**
 * Vote Business Logic
 */
export class Vote extends React.Component<Props, State> {
  static defaultProps = {
    index: 0,
    goToNextCard: undefined,
    onVote: () => {},
    onUnvote: () => {},
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
      animateVote: false,
      pendingVoteKey: '',
    };
  }

  handleUnvote = (voteKey: string) => {
    const { proposalId, proposalKey, index, onUnvote } = this.props;

    VoteService.unvote(proposalId, voteKey, proposalKey)
      .then(vote => {
        this.delayStateUpdateOnEndVote(() =>
          this.setState(prevState => doUnvote(prevState, vote))
        );
        onUnvote(proposalId, voteKey, index);
        trackUnvote(proposalId, voteKey, index);
      })
      .catch(() => {
        this.setState(finishPendingState);
      });
  };

  wait = async (ms: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  handleVote = async (voteKey: string) => {
    const { proposalId, proposalKey, index, onVote } = this.props;
    this.setState(prevState => startAnimatingVoteState(prevState, voteKey));
    await this.wait(500);
    VoteService.vote(proposalId, voteKey, proposalKey)
      .then(vote => {
        this.delayStateUpdateOnEndVote(() =>
          this.setState(prevState => doVote(prevState, vote))
        );

        onVote(proposalId, voteKey, index);
        trackVote(proposalId, voteKey, index);
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
    const timeBeforeStartUpdateState = 750;
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
    const timeBeforeEndUpdateState = 500;
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
      animateVote,
      pendingVoteKey,
    } = this.state;

    const voteKeys = Object.keys(voteStaticParams);

    const handleVoteIfAnyPending = voteKey => () => {
      if (!pending) {
        this.handleVoting(voteKey);
      }
    };

    if (hasVoted) {
      return (
        <React.Fragment>
          <VoteContainerStyle>
            <VoteResult
              proposalId={proposalId}
              votes={votes}
              votedKey={votedKey}
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
          </VoteContainerStyle>
          {goToNextCard && (
            <NextButtonStyle
              onClick={goToNextCard}
              id={`next-button-${proposalId}`}
            >
              {i18n.t('proposal_card.next')}
            </NextButtonStyle>
          )}
        </React.Fragment>
      );
    }

    return (
      <VoteContainerStyle>
        <ScreenReaderItemStyle as="p">
          {i18n.t('vote.intro_title')}
        </ScreenReaderItemStyle>
        <VoteWrapperStyle>
          {voteKeys.map<React.Node>((voteKey: string) => (
            <li key={getVoteKey(voteKey, proposalId)}>
              <VoteButton
                key={getVoteKey(voteKey, proposalId)}
                color={voteStaticParams[voteKey].color}
                transform={voteStaticParams[voteKey].transform}
                voteKey={voteKey}
                label={i18n.t(`vote.${voteKey}`)}
                icon={<SvgThumbsUp />}
                buttonType={VoteButtonStyle}
                animateVote={animateVote && pendingVoteKey === voteKey}
                handleVote={handleVoteIfAnyPending(voteKey)}
                displayPending={pendingVoteKey === voteKey}
              />
            </li>
          ))}
        </VoteWrapperStyle>
      </VoteContainerStyle>
    );
  }
}
