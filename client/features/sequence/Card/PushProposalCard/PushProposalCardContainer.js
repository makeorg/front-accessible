// @flow
import * as React from 'react';
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
export class PushProposalCardContainer extends React.Component<Props> {
  componentDidUpdate = () => {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplayProposalPushCard();
    }
  };

  skipProposalPushCard = () => {
    const { incrementCurrentIndex } = this.props;
    incrementCurrentIndex();
    Tracking.trackClickProposalPushCardIgnore();
  };

  focusProposalField = (): void => {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
    }
  };

  render() {
    const { configuration } = this.props;

    return (
      <PushProposalCardComponent
        configuration={configuration}
        focusProposalField={this.focusProposalField}
        skipProposalPushCard={this.skipProposalPushCard}
      />
    );
  }
}
