import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  TooltipWrapperStyle,
  TopTooltipStyle,
} from 'Client/ui/Elements/TooltipElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { TooltipWithTriggerComponent } from './TooltipWithTriggerComponent';

type Props = {
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
  /** Tab Index for button */
  tabIndex?: number,
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

export class TooltipWithTriggerState extends React.Component<Props, State> {
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
      <TooltipWithTriggerComponent
        {...this.props}
        isTooltipDisplayed={isTooltipDisplayed}
        toggleTooltip={this.toggleTooltip}
        displayTooltip={this.displayTooltip}
        hideTooltip={this.hideTooltip}
      />
    );
  }
}

TooltipWithTriggerState.defaultProps = {
  tooltipWrapper: TooltipWrapperStyle,
  triggerType: UnstyledButtonStyle,
  tooltipType: TopTooltipStyle,
  tabIndex: 0,
  zIndex: 0,
  ariaLabelDisplay: i18n.t('common.display_tooltip'),
  ariaLabelHide: i18n.t('common.hide_tooltip'),
};
