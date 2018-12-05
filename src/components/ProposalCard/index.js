import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import VoteContainer from 'Containers/Vote';
import { getPosition, getScale, getZIndex } from 'Helpers/sequence';
import DateHelper from 'Helpers/date';
import ProposalCard from './Styled';
import ProgressBarComponent from './ProgressBar';

type Props = {
  proposal: Object,
  index: number,
  cardsCount: number,
  currentIndex: number,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean,
  goToPreviousCard: Function,
  goToNextCard: Function
}
const ProposalCardComponent = (props: Props) => {
  const {
    proposal,
    index,
    cardsCount,
    currentIndex,
    isPannelOpen,
    isSequenceCollapsed,
    goToPreviousCard,
    goToNextCard
  } = props;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collapsed-card' : ''}
      id={`proposal-card-${index}`}
    >
      <ProposalCard.BackButtonWrapper>
        <ProposalCard.BackButton
          tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
          onClick={goToPreviousCard}
        >
          <ProposalCard.BackIcon>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </ProposalCard.BackIcon>
          {i18next.t('proposal_card.previous')}
        </ProposalCard.BackButton>
        <ProgressBarComponent index={index} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.InnerContent as="section">
        <ProposalCard.AuthorInfos>
          {proposal.author.firstName}
          &nbsp;-&nbsp;
          <time dateTime={proposal.createdAt}>
            {DateHelper.proposalCreationDateFormat(proposal.createdAt)}
          </time>
        </ProposalCard.AuthorInfos>
        <ProposalCard.Separator aria-hidden />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
        <VoteContainer
          proposalId={proposal.id}
          votes={proposal.votes}
          isPannelOpen={isPannelOpen}
          isSequenceCollapsed={isSequenceCollapsed}
          index={index}
          currentIndex={currentIndex}
          goToNextCard={goToNextCard}
        />
      </ProposalCard.InnerContent>
    </ProposalCard>
  );
};

export default ProposalCardComponent;
