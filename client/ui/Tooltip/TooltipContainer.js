import React from 'react';
import {
  TopTooltipStyle,
  BottomTooltipStyle,
  LeftTooltipStyle,
  RightTooltipStyle,
} from 'Client/ui/Elements/TooltipElements';
import { TooltipComponent } from './TooltipComponent';

type Props = {
  /** Content of the button */
  content: React.Component | string,
  /** Content of the Tooltip */
  children: React.Component | string,
  /** Styled Component Element */
  direction?: string,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  displayTooltip: boolean,
};

const TooltipType = {
  top: TopTooltipStyle,
  bottom: BottomTooltipStyle,
  left: LeftTooltipStyle,
  right: RightTooltipStyle,
};

export class TooltipContainer extends React.Component<Props, State> {
  state = {
    displayTooltip: false,
  };

  showTooltip = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      displayTooltip: true,
    });
  };

  hideTooltip = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      displayTooltip: false,
    });
  };

  render() {
    const { content, children, direction } = this.props;
    const { displayTooltip } = this.state;
    return (
      <TooltipComponent
        type={TooltipType[direction]}
        content={content}
        displayTooltip={displayTooltip}
        showTooltip={this.showTooltip}
        hideTooltip={this.hideTooltip}
      >
        {children}
      </TooltipComponent>
    );
  }
}

TooltipContainer.defaultProps = {
  direction: 'top',
};
