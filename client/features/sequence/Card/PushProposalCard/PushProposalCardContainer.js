// @flow
import React, { useEffect } from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import {
  trackDisplayProposalPushCard,
  trackClickProposalPushCardIgnore,
} from 'Shared/services/Tracking';
import { focusProposalField } from 'Client/app/SkipLinks/Consultation';
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
      trackDisplayProposalPushCard();
    }
  }, [isCardVisible]);

  const skipProposalPushCard = () => {
    incrementCurrentIndex();
    trackClickProposalPushCardIgnore();
  };

  return (
    <PushProposalCardComponent
      configuration={configuration}
      focusProposalField={focusProposalField}
      skipProposalPushCard={skipProposalPushCard}
    />
  );
};
