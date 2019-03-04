import React from 'react';
import { type Partners } from 'Shared/types/partners';
import { AvatarComponent } from './AvatarComponent';

type Props = {
  partner: Partners,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
};

export class AvatarContainer extends React.Component<Props, State> {
  state = {
    isTooltipDisplayed: false,
  };

  displayTooltip = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true,
    });
  };

  hideTooltip = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false,
    });
  };

  render() {
    const { partner } = this.props;
    return (
      <AvatarComponent
        partnerName={partner.name}
        partnerLogo={partner.imageUrl}
        isFounder={partner.isFounder}
        {...this.state}
        displayTooltip={event => this.displayTooltip(event)}
        hideTooltip={event => this.hideTooltip(event)}
      />
    );
  }
}
