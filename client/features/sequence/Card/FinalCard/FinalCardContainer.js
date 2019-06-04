// @flow
import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { FinalCardComponent } from './FinalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Final Card Business Logic
 */
export class FinalCardContainer extends React.Component<Props> {
  componentDidUpdate() {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplayFinalCard();
    }
  }

  render() {
    const { configuration } = this.props;

    return (
      <FinalCardComponent configuration={configuration}/>
    );
  }
}
