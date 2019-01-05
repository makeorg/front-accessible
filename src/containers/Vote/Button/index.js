/* @flow */
import * as React from 'react';
import VoteButtonComponent from 'Components/Vote/Button';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Rotate property passed to Styled Component */
  rotate: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  id: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** Method called when vote button is clicked */
  handleVote: Function
}

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean
}

/**
 * Handles Vote Button Business Logic
 */
class VoteButtonContainer extends React.Component<Props, State> {
  state = {
    isTooltipDisplayed: false
  }

  displayTooltip = (event) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true
    });
  }

  hideTooltip = (event) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false
    });
  }

  render() {
    return (
      <VoteButtonComponent
        {...this.props}
        {...this.state}
        displayTooltip={this.displayTooltip}
        hideTooltip={this.hideTooltip}
      />
    );
  }
}

export default VoteButtonContainer;
