// @flow
import React, { useContext, useEffect, useState } from 'react';
import { i18n } from 'Shared/i18n';
import { trackVote, trackUnvote } from 'Shared/services/Tracking';
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
import { TopComponentContext } from 'Client/context/TopComponentContext';
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
  proposalId: string,
  /** Question Slug */
  questionSlug: string,
  /** Array with votes received from Api */
  votes: VoteType[],
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Index of the card */
  index: number,
  /** Method called when Vote */
  onVote?: (
    proposalId: string,
    questionSlug: string,
    voteKey: string,
    index: number
  ) => void,
  /** Method called when Unvote */
  onUnvote?: (
    proposalId: string,
    questionSlug: string,
    voteKey: string,
    index: number
  ) => void,
};

export const Vote = ({
  proposalId,
  questionSlug,
  votes,
  proposalKey,
  index = 0,
  onVote = () => {},
  onUnvote = () => {},
}: Props) => {
  const contextType = useContext(TopComponentContext);
  const [currentVotes, setVotes] = useState(votes);
  const [userVote, setUserVote] = useState(
    currentVotes.find(vote => vote.hasVoted === true)
  );
  const [votedKey, setVotedKey] = useState(userVote ? userVote.voteKey : '');
  const [pending, setPending] = useState(false);
  const [animateVoteKey, setAnimatedVoteKey] = useState('');
  const [pendingVoteKey, setPendingVoteKey] = useState('');

  let timeout;
  const wait = async (ms: number) => {
    return new Promise(resolve => {
      timeout = setTimeout(resolve, ms);
    });
  };
  const clearWait = async () => {
    clearTimeout(timeout);
  };

  const startPending = (voteKey: string) => {
    setPendingVoteKey(voteKey);
    wait(750).then(() => {
      setAnimatedVoteKey('');
      setPending(true);
    });
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
    startPending(voteKey);
    const unvote = await VoteService.unvote(proposalId, voteKey, proposalKey);
    if (!unvote) {
      stopPending();
      return;
    }
    setVotedKey('');
    setVotes(updateAndGetVotes(currentVotes, unvote));
    await onUnvote(proposalId, questionSlug, voteKey, index);
    await trackUnvote(proposalId, voteKey, index, contextType);
    stopPending();
  };

  const handleVote = async (voteKey: string) => {
    setAnimatedVoteKey(voteKey);
    await wait(500);
    startPending(voteKey);
    const vote = await VoteService.vote(proposalId, voteKey, proposalKey);
    if (!vote) {
      stopPending();
      return;
    }
    setVotedKey(vote.voteKey);
    setVotes(updateAndGetVotes(currentVotes, vote));
    await onVote(proposalId, questionSlug, voteKey, index);
    await trackVote(proposalId, voteKey, index, contextType);
    stopPending();
  };

  useEffect(() => {
    setUserVote(currentVotes.find(vote => vote.hasVoted === true));
  }, [currentVotes]);

  useEffect(() => {
    return () => {
      clearWait();
    };
  }, []);

  if (userVote && votedKey) {
    return (
      <VoteContainerStyle>
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
    <VoteContainerStyle>
      <ScreenReaderItemStyle as="p">
        {i18n.t('vote.intro_title')}
      </ScreenReaderItemStyle>
      <VoteWrapperStyle>
        {voteStaticParamsKeys.map((voteKey: string) => (
          <VoteButtonWrapperStyle as="li" key={getVoteKey(voteKey, proposalId)}>
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
  );
};
