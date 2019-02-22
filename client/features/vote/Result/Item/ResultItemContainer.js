/* @flow */
import * as React from 'react';
import type { VotesPercentObject } from 'Shared/types/proposal';
import * as VoteResultHelper from 'Shared/helpers/voteResult';
import { getVoteKey } from 'Shared/helpers/vote';
import { ResultItemComponent } from './ResultItemComponent';

type Props = {
  /** Object with votes percentage results */
  votesPercent: VotesPercentObject,
  /** Object with static vote properties (color, label, ...) */
  voteStaticParams: Object,
  /** Proposal Id */
  proposalId: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Vote key */
  voteKey: string,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
};

/**
 * Handles Result Item Business Logic
 */
export class ResultItemContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isTooltipDisplayed: false,
    };
  }

  toggleTooltip = (event: SyntheticEvent<>) => {
    const { isTooltipDisplayed } = this.state;
    event.preventDefault();
    if (isTooltipDisplayed) {
      this.setState({
        isTooltipDisplayed: false,
      });
    } else {
      this.setState({
        isTooltipDisplayed: true,
      });
    }
  };

  displayTooltip = (event: SyntheticEvent<>) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true,
    });
  };

  hideTooltip = (event: SyntheticEvent<>) => {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false,
    });
  };

  render() {
    const {
      votesPercent,
      voteStaticParams,
      proposalId,
      tabIndex,
      voteKey,
    } = this.props;
    const { isTooltipDisplayed } = this.state;
    return (
      <ResultItemComponent
        key={getVoteKey(voteKey, proposalId)}
        listKey={getVoteKey(voteKey, proposalId)}
        barKey={VoteResultHelper.getResultBarIndex(voteKey, proposalId)}
        tooltipKey={VoteResultHelper.getTooltipIndex(voteKey, proposalId)}
        votedKey={voteKey}
        proposalId={proposalId}
        voteColor={voteStaticParams[voteKey].color}
        votePercent={votesPercent[voteKey]}
        tabIndex={tabIndex}
        voteKey={voteKey}
        toggleTooltip={this.toggleTooltip}
        displayTooltip={this.displayTooltip}
        hideTooltip={this.hideTooltip}
        isTooltipDisplayed={isTooltipDisplayed}
      />
    );
  }
}
