import React from 'react';
import { type Partner } from 'Shared/types/partners';
import { i18n } from 'Shared/i18n';
import {
  TooltipWrapperStyle,
  TopTooltipStyle,
} from 'Client/ui/Elements/TooltipElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { PartnerTooltipComponent } from './TooltipComponent';

type Props = {
  partner: Partner,
  /** Content of the button */
  triggerContent: React.Component | string,
  /** Content of the Tooltip */
  children: React.Component | string,
  /** Styled Component Element used as button */
  triggerType?: React.Component,
  /** Styled Component Element */
  tooltipType?: React.Component,
  /** Styled Component Element for Tooltip Wrapper */
  tooltipWrapper?: React.Component,
  /** Custom z-index for tooltip */
  zIndex?: number,
  /** Custom aria-label for display event */
  ariaLabelDisplay?: sting,
  /** Custom aria-label for hide event */
  ariaLabelHide?: sting,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
};

export class PartnerTooltipContainer extends React.Component<Props, State> {
  state = {
    isTooltipDisplayed: false,
  };

  toggleTooltip = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState(prevState => ({
      isTooltipDisplayed: !prevState.isTooltipDisplayed,
    }));
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
    const { isTooltipDisplayed } = this.state;
    return (
      <PartnerTooltipComponent
        {...this.props}
        isTooltipDisplayed={isTooltipDisplayed}
        displayTooltip={this.displayTooltip}
        hideTooltip={this.hideTooltip}
      />
    );
  }
}

PartnerTooltipContainer.defaultProps = {
  tooltipWrapper: TooltipWrapperStyle,
  triggerType: UnstyledButtonStyle,
  tooltipType: TopTooltipStyle,
  zIndex: 0,
  ariaLabelDisplay: i18n.t('common.display_tooltip'),
  ariaLabelHide: i18n.t('common.hide_tooltip'),
};
