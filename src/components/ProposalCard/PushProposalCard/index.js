/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward, faArrowLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from '../../Elements/ButtonElements';
import { CenterColumn, MiddleColumnToRow } from '../../Elements/FlexElements';
import ExtraLogo from './ExtraLogo';
import ProgressBarComponent from '../ProgressBar';
import ProposalCard from '../Styled';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  proposalCardParams: Object,
  /** Index of the card */
  index: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when next card button is clicked */
  skipProposalPushCard: Function,
  /** Method called when proposal button is clicked  */
  focusProposalField: Function
}

/**
 * Renders Push Proposal Card
 */
const PushProposalCardComponent = (props: Props) => {
  const {
    proposalCardParams,
    index,
    tabIndex,
    currentIndex,
    cardsCount,
    goToPreviousCard,
    position,
    scale,
    zindex,
    skipProposalPushCard,
    focusProposalField
  } = props;

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collapsed-card' : ''}
    >
      <ProposalCard.BackButtonWrapper>
        <ProposalCard.BackButton
          tabIndex={tabIndex}
          onClick={goToPreviousCard}
        >
          <ProposalCard.BackIcon>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </ProposalCard.BackIcon>
          {i18next.t('proposal_card.previous')}
        </ProposalCard.BackButton>
        <ProgressBarComponent index={index} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.InnerContent>
        <CenterColumn as="section">
          <header>
            {proposalCardParams && <ExtraLogo extraLogo={proposalCardParams.extraLogo} />}
            <ProposalCard.AltMainTitle>
              {i18next.t('push_proposal_card.title')}
            </ProposalCard.AltMainTitle>
          </header>
          <MiddleColumnToRow as="section">
            <ProposalCard.PushProposalButton
              type="submit"
              tabIndex={tabIndex}
              onClick={focusProposalField}
            >
              <IconInButton>
                <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
              </IconInButton>
              {i18next.t('common.propose')}
            </ProposalCard.PushProposalButton>
            <ProposalCard.PushProposalNextButton
              tabIndex={tabIndex}
              onClick={skipProposalPushCard}
            >
              <IconInButton>
                <FontAwesomeIcon
                  aria-hidden
                  icon={faStepForward}
                />
              </IconInButton>
              {i18next.t('push_proposal_card.next-cta')}
            </ProposalCard.PushProposalNextButton>
          </MiddleColumnToRow>
        </CenterColumn>
      </ProposalCard.InnerContent>
    </ProposalCard>
  );
};

export default PushProposalCardComponent;
