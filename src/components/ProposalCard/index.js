import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProposalCard from './Styled';
import ProgressBarComponent from './ProgressBar';
import VoteContainer from '../../containers/Vote';
import { getPosition, getScale, getZIndex } from '../../helpers/sequence';
import DateHelper from '../../helpers/date';

class ProposalCardComponent extends React.Component {
  render() {
    const {
      proposal,
      index,
      totalIndex,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed,
      goToPreviousCard,
      goToNextCard
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <ProposalCard
        position={position}
        scale={scale}
        zindex={zindex}
        className={index < currentIndex ? 'collapsed-card' : ''}
      >
        <ProposalCard.FakeNavWrapper>
          <ProposalCard.BackButton
            tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            onClick={goToPreviousCard}
          >
            <ProposalCard.BackIcon>
              <FontAwesomeIcon aria-hidden="true" icon={faArrowLeft} />
            </ProposalCard.BackIcon>
            {i18next.t('proposal_card.previous')}
          </ProposalCard.BackButton>
          <ProgressBarComponent index={index} totalIndex={totalIndex} />
        </ProposalCard.FakeNavWrapper>
        <ProposalCard.AuthorInfos>
          {proposal.author.firstName}
          &nbsp;-&nbsp;
          <time dateTime={proposal.createdAt}>
            {DateHelper.proposalCreationDateFormat(proposal.createdAt)}
          </time>
        </ProposalCard.AuthorInfos>
        <ProposalCard.Separator aria-hidden="true" />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
        <VoteContainer
          proposalId={proposal.id}
          proposalVotes={proposal.votes}
          isPannelOpen={isPannelOpen}
          isSequenceCollapsed={isSequenceCollapsed}
          index={index}
          currentIndex={currentIndex}
          goToNextCard={goToNextCard}
        />
      </ProposalCard>
    );
  }
}

export default ProposalCardComponent;
