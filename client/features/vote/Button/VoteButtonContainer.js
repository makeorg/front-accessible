/* @flow */
import * as React from 'react';
import { VoteButtonComponent } from './VoteButtonComponent';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Rotate property passed to Styled Component */
  rotate: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Id of vote button */
  id: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** When button is in pending mode */
  displayPending: boolean,
  /** Method called when vote button is clicked */
  handleVote: () => void,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
  displayPending: boolean,
};

/**
 * Handles Vote Button Business Logic
 */
export class VoteButtonContainer extends React.Component<Props, State> {
  state = {
    isTooltipDisplayed: false,
    displayPending: false,
  };

  componentDidMount = () => {
    const { displayPending } = this.props;
    this.setState(prevState => ({ ...prevState, displayPending }));
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

  handleVoteAction = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { handleVote, displayPending } = this.props;
    if (!displayPending) {
      handleVote();
    }
  };

  render() {
    const { isTooltipDisplayed } = this.state;
    return (
      <VoteButtonComponent
        {...this.props}
        isTooltipDisplayed={isTooltipDisplayed}
        handleVote={this.handleVoteAction}
        displayTooltip={event => this.displayTooltip(event)}
        hideTooltip={event => this.hideTooltip(event)}
      />
    );
  }
}
