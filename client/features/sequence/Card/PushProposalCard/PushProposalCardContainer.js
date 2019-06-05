// @flow
import React, { useEffect } from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { PushProposalCardComponent } from './PushProposalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
};

/**
 * Handles Push Proposal Card Business Logic
 */
export const PushProposalCardContainer = ({
  configuration,
  isCardVisible,
  incrementCurrentIndex,
}: Props) => {
  useEffect(() => {
    if (isCardVisible) {
      Tracking.trackDisplayProposalPushCard();
    }
  }, [isCardVisible]);

  const skipProposalPushCard = () => {
    incrementCurrentIndex();
    Tracking.trackClickProposalPushCardIgnore();
  };

  const focusProposalField = (): void => {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
    }
  };

  return (
    <PushProposalCardComponent
      configuration={configuration}
      focusProposalField={focusProposalField}
      skipProposalPushCard={skipProposalPushCard}
    />
  );
};
