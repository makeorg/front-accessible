import React from 'react';
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
    return (
      <TooltipWithTriggerComponent
        {...this.props}
        {...this.state}
        toggleTooltip={this.toggleTooltip}
        displayTooltip={this.displayTooltip}
        hideTooltip={this.hideTooltip}
      />
    );
  }
}

TooltipWithTriggerState.defaulProps = {
  tooltipWrapper: <TooltipWrapperStyle />,
  triggerType: <UnstyledButtonStyle />,
  tooltipType: <TopTooltipStyle />,
  tabIndex: 0,
  zIndex: 0,
};
