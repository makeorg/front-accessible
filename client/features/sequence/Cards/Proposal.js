// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trackClickNextCard } from 'Shared/services/Tracking';
import { Vote } from 'Client/features/vote';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { type ProposalCardType } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import { CARD_TYPE_PROPOSAL } from 'Shared/constants/card';
import { SequenceProposalAuthor } from '../Proposal/Author';
import { SequenceProposalStyle, SequenceNextCardButtonStyle } from './style';

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
  const allCards = useSelector((state: StateRoot) => state.sequence.cards);
  const votes = useSelector((state: StateRoot) =>
    state.sequence.cards[index].state
      ? state.sequence.cards[index].state.votes
      : []
  );
  const proposalCards = allCards.filter(
    card => card.type === CARD_TYPE_PROPOSAL
  );
  const lastProposal = proposalCards.pop();

  const [isVoted, setIsVoted] = useState(
    votes.some(vote => vote.hasVoted === true)
  );
  const [isLastProposalCard, setIsLastProposalCard] = useState(
    proposalCard.index === lastProposal.index
  );

  useEffect(() => {
    setProposal(proposalCard.configuration.proposal);
    setIndex(proposalCard.index);
    setIsLastProposalCard(proposalCard.index === lastProposal.index);
  }, [proposalCard, lastProposal.index]);

  useEffect(() => {
    setIsVoted(votes.some(vote => vote.hasVoted === true));
  }, [votes]);

  const goToNextCard = () => {
    dispatch(incrementSequenceIndex());
    trackClickNextCard();
  };

  return (
    <>
      <SequenceProposalAuthor proposal={proposal} />
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
          <SequenceNextCardButtonStyle
            onClick={goToNextCard}
            id={`next-button-${proposal.id}`}
            data-cy-button="next-proposal"
          >
            {isLastProposalCard
              ? i18n.t('proposal_card.validate')
              : i18n.t('proposal_card.next')}
          </SequenceNextCardButtonStyle>
        </>
      )}
    </>
  );
};
