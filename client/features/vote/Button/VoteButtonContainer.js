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
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** When button is in pending mode */
  displayPending: boolean,
  /** Method called when vote button is clicked */
  handleVote: () => void,
};

type State = {
  /** Boolean to see when action is in progress */
  displayPending: boolean,
};

/**
 * Handles Vote Button Business Logic
 */
export class VoteButtonContainer extends React.Component<Props, State> {
  state = {
    displayPending: false,
  };

  componentDidMount = () => {
    const { displayPending } = this.props;
    this.setState(prevState => ({ ...prevState, displayPending }));
  };

  handleVoteAction = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { handleVote, displayPending } = this.props;
    if (!displayPending) {
      handleVote();
    }
  };

  render() {
    const { color, label, icon, buttonType, displayPending } = this.props;

    return (
      <VoteButtonComponent
        color={color}
        label={label}
        icon={icon}
        buttonType={buttonType}
        displayPending={displayPending}
        handleVote={this.handleVoteAction}
      />
    );
  }
}
