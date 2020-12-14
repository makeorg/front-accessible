// @flow
import React, { useContext, useEffect, useState } from 'react';
import { i18n } from 'Shared/i18n';
import {
  trackVote,
  trackFirstVote,
  trackUnvote,
} from 'Shared/services/Tracking';
import { type VoteType } from 'Shared/types/vote';
import {
  getVoteKey,
  getSameKey,
  getVoteButtonClass,
  updateAndGetVotes,
} from 'Shared/helpers/vote';
import { VoteService } from 'Shared/services/Vote';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { voteStaticParamsKeys } from 'Shared/constants/vote';
import {
  TopComponentContext,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { type ProposalType } from 'Shared/types/proposal';
import { useDispatch, useSelector } from 'react-redux';
import {
  vote as actionVote,
  unvote as actionUnvote,
} from 'Shared/store/actions/sequence';
import { type StateRoot } from 'Shared/store/types';
import { Tip } from 'Client/ui/Elements/Notifications/Tip';
import {
  clearNotificationTip,
  dismissNotification,
  displayNotificationTip,
} from 'Shared/store/actions/notifications';
import { FIRST_VOTE_TIP_MESSAGE } from 'Shared/constants/notifications';
import { Qualification } from '../qualification';
import { VoteResult } from './Result';
import {
  VoteContainerStyle,
  VoteWrapperStyle,
  VoteButtonWrapperStyle,
} from './style';
import { VoteButton } from './Button/Vote';

type Props = {
  /** Proposal's Id */
  proposal: ProposalType,
  /** Question Slug */
  votes: VoteType[],
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Index of the card */
  index: number,
  /** Method called when Vote */
  onVote?: () => void,
  /** Method called when Unvote */
  onUnvote?: () => void,
  /** Specific design for new sequence */
  isSequence?: boolean,
};

export const Vote = ({
  proposal,
  votes,
  proposalKey,
  index = 0,
  onVote = () => {},
  onUnvote = () => {},
  isSequence,
}: Props) => {
  const dispatch = useDispatch();
  const { id: proposalId } = proposal;
  const contextType = useContext(TopComponentContext);
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [userVote, setUserVote] = useState(
    currentVotes && currentVotes.find(vote => vote.hasVoted === true)
  );
  const [votedKey, setVotedKey] = useState(userVote ? userVote.voteKey : '');
  const [pending, setPending] = useState(false);
  const [animateVoteKey, setAnimatedVoteKey] = useState('');
  const [pendingVoteKey, setPendingVoteKey] = useState('');
  const { votedProposalIds } = useSelector(
    (state: StateRoot) => state.sequence
  );
  const isFirstSequenceVote =
    contextType === TopComponentContextValue.getSequenceProposal() &&
    (votedProposalIds[proposal.question.slug] || []).length === 0;

  let timeout;
  const wait = async (ms: number) =>
    new Promise(resolve => {
      timeout = setTimeout(resolve, ms);
    });
  const clearWait = async () => {
    clearTimeout(timeout);
  };

  const stopPending = () => {
    clearWait();
    if (pending) {
      wait(500);
    }
    setPending(false);
    setAnimatedVoteKey('');
    setPendingVoteKey('');
  };

  const handleUnvote = async (voteKey: string) => {
    setPendingVoteKey(voteKey);
    setPending(true);

    const unvote = await VoteService.unvote(proposalId, voteKey, proposalKey);
    if (!unvote) {
      stopPending();
      return;
    }
    setVotedKey('');
    const newVotes = updateAndGetVotes(currentVotes, unvote);
    setCurrentVotes(newVotes);
    setUserVote(null);
    dispatch(actionUnvote(proposal, newVotes, contextType));
    await onUnvote();
    await trackUnvote(proposalId, voteKey, index, contextType);
    stopPending();
  };

  const handleVote = async (voteKey: string) => {
    setAnimatedVoteKey(voteKey);
    await wait(500);
    setPendingVoteKey(voteKey);
    wait(750).then(() => {
      setAnimatedVoteKey('');
      setPending(true);
    });

    const vote = await VoteService.vote(proposalId, voteKey, proposalKey);
    if (!vote) {
      stopPending();
      return;
    }
    setVotedKey(vote.voteKey);
    const updatedVotes = updateAndGetVotes(currentVotes, vote);
    setCurrentVotes(updatedVotes);
    setUserVote(updatedVotes.find(newVote => newVote.hasVoted === true));
    dispatch(actionVote(proposal, updatedVotes, contextType));
    await onVote();
    await trackVote(proposalId, voteKey, index, contextType);
    if (isFirstSequenceVote) {
      trackFirstVote(proposalId, voteKey, index);
      dispatch(dismissNotification(FIRST_VOTE_TIP_MESSAGE));
      dispatch(clearNotificationTip());
    }
    stopPending();
  };

  useEffect(() => {
    const stateUserVote = votes && votes.find(vote => vote.hasVoted === true);
    setCurrentVotes(votes);
    setUserVote(stateUserVote);
    setVotedKey(stateUserVote ? stateUserVote.voteKey : '');
  }, [votes]);

  useEffect(
    () => () => {
      clearWait();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (isFirstSequenceVote) {
      dispatch(displayNotificationTip(FIRST_VOTE_TIP_MESSAGE, undefined, true));
    }

    return () => dispatch(clearNotificationTip());
  }, [dispatch, isFirstSequenceVote]);

  if (userVote && votedKey) {
    return (
      <VoteContainerStyle isSequence={isSequence}>
        <VoteResult
          proposalId={proposalId}
          votes={currentVotes}
          votedKey={votedKey}
          handleUnvote={async () => handleUnvote(votedKey)}
          pending={pending}
        />
        <Qualification
          proposalId={proposalId}
          qualifications={userVote.qualifications}
          proposalKey={proposalKey}
          votedKey={votedKey}
          index={index}
          pendingVote={pending}
        />
      </VoteContainerStyle>
    );
  }

  return (
    <>
      {isFirstSequenceVote && <Tip isFirstSequenceVote={isFirstSequenceVote} />}
      <VoteContainerStyle isSequence={isSequence}>
        <ScreenReaderItemStyle as="p">
          {i18n.t('vote.intro_title')}
        </ScreenReaderItemStyle>
        <VoteWrapperStyle>
          {voteStaticParamsKeys.map((voteKey: string) => (
            <VoteButtonWrapperStyle
              as="li"
              key={getVoteKey(voteKey, proposalId)}
            >
              <VoteButton
                voteKey={voteKey}
                buttonClass={getVoteButtonClass(
                  voteKey,
                  animateVoteKey,
                  pendingVoteKey,
                  false
                )}
                displayPending={getSameKey(pendingVoteKey, voteKey)}
                handleVote={() => handleVote(voteKey)}
                animateVote={getSameKey(animateVoteKey, voteKey)}
              />
            </VoteButtonWrapperStyle>
          ))}
        </VoteWrapperStyle>
      </VoteContainerStyle>
    </>
  );
};
