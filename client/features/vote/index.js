// @flow
import React, { useContext, useEffect, useState } from 'react';
import { i18n } from 'Shared/i18n';
import { trackVote, trackUnvote } from 'Shared/services/Tracking';
import { type VoteType } from 'Shared/types/vote';
import { getVoteKey } from 'Shared/helpers/vote';
import { VoteService } from 'Shared/services/Vote';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { voteStaticParams, voteStaticParamsKeys } from 'Shared/constants/vote';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { TopComponentContext } from 'Client/context/TopComponentContext';
import { Qualification } from './Qualification';
import { VoteResult } from './Result';
import { VoteContainerStyle, VoteWrapperStyle } from './Styled';
import { VoteButton } from './Button';

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
  const [animateVote, setAnimateVote] = useState(false);
  const [pendingVoteKey, setPendingVoteKey] = useState('');

  const updateAndGetVotes = (votesToUpdate: Object, vote: Object) => {
    return votesToUpdate.map(oldVote =>
      oldVote.voteKey === vote.voteKey ? vote : oldVote
    );
  };

  let timeout;
  const wait = async (ms: number) => {
    return new Promise(resolve => {
      timeout = setTimeout(resolve, ms);
    });
  };
  const clearWait = async () => {
    clearTimeout(timeout);
  };

  const startAnimationPending = () => {
    wait(750).then(() => {
      setAnimateVote(false);
      setPending(true);
    });
  };

  const stopAnimation = () => {
    clearWait();
    if (pending) {
      wait(500);
    }
    setPending(false);
    setAnimateVote(false);
  };

  const handleUnvote = async (voteKey: string) => {
    const vote = await VoteService.unvote(proposalId, voteKey, proposalKey);
    if (!vote) {
      stopAnimation();
      return;
    }
    setVotedKey('');
    setVotes(updateAndGetVotes(currentVotes, vote));
    onUnvote(proposalId, questionSlug, voteKey, index);
    trackUnvote(proposalId, voteKey, index, contextType);
  };

  const handleVote = async (voteKey: string) => {
    const vote = await VoteService.vote(proposalId, voteKey, proposalKey);
    if (!vote) {
      stopAnimation();
      return;
    }
    setVotedKey(vote.voteKey);
    setVotes(updateAndGetVotes(currentVotes, vote));
    onVote(proposalId, questionSlug, voteKey, index);
    trackVote(proposalId, voteKey, index, contextType);
  };

  const handleVoting = async (voteKey: string) => {
    if (pendingVoteKey !== '') {
      stopAnimation();
      return;
    }
    setPendingVoteKey(voteKey);
    setAnimateVote(true);
    if (userVote) {
      startAnimationPending();
      await handleUnvote(voteKey);
    } else {
      await wait(500);
      startAnimationPending();
      await handleVote(voteKey);
    }
    stopAnimation();
    setPendingVoteKey('');
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
          handleVote={async () => handleVoting(votedKey)}
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
              handleVote={async () => handleVoting(voteKey)}
              displayPending={pendingVoteKey === voteKey}
            />
          </li>
        ))}
      </VoteWrapperStyle>
    </VoteContainerStyle>
  );
};
