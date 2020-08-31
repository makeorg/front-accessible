// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trackClickNextCard } from 'Shared/services/Tracking';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement/index';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { type ProposalCardType } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import {
  SequenceProposalStyle,
  SequenceContentSpecialWrapperStyle,
  SequenceNextButtonStyle,
} from '../style';

type Props = {
  /** Proposal card */
  proposalCard: ProposalCardType,
};

/**
 * Handles Proposal Card Business Logic
 */
export const ProposalCard = ({ proposalCard }: Props) => {
  const dispatch = useDispatch();

  const [proposal, setProposal] = useState(proposalCard.configuration.proposal);
  const [index, setIndex] = useState(proposalCard.index);

  const cardsLength = useSelector(
    (state: StateRoot) => state.sequence.cards.length
  );
  const votes = useSelector((state: StateRoot) =>
    state.sequence.cards[index].state
      ? state.sequence.cards[index].state.votes
      : []
  );

  const [isVoted, setIsVoted] = useState(
    votes.some(vote => vote.hasVoted === true)
  );
  const [isLastCard, setIsLastCard] = useState(
    proposalCard.index === cardsLength - 1
  );

  useEffect(() => {
    setProposal(proposalCard.configuration.proposal);
    setIndex(proposalCard.index);
    setIsLastCard(proposalCard.index === cardsLength - 1);
  }, [proposalCard, cardsLength]);

  useEffect(() => {
    setIsVoted(votes.some(vote => vote.hasVoted === true));
  }, [votes]);

  const goToNextCard = () => {
    dispatch(incrementSequenceIndex());
    trackClickNextCard();
  };

  return (
    <SequenceContentSpecialWrapperStyle>
      <ProposalAuthorElement proposal={proposal} withAvatar isSequence />
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <SequenceProposalStyle>{proposal.content}</SequenceProposalStyle>
      <Vote
        proposal={proposal}
        votes={votes}
        proposalKey={proposal.proposalKey}
        index={index}
        onVote={() => {}}
        onUnvote={() => {}}
        isSequence
      />
      {isVoted && (
        <>
          <SequenceNextButtonStyle
            onClick={goToNextCard}
            id={`next-button-${proposal.id}`}
            data-cy-button="next-proposal"
          >
            {isLastCard
              ? i18n.t('proposal_card.validate')
              : i18n.t('proposal_card.next')}
          </SequenceNextButtonStyle>
        </>
      )}
    </SequenceContentSpecialWrapperStyle>
  );
};
