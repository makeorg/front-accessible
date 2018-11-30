import React from 'react';
import ResultItemComponent from '../../../../components/Vote/Result/Item';
import * as VoteResultHelper from '../../../../helpers/voteResult';
import { getVoteIndex } from '../../../../helpers/vote';

class ResultItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipDisplayed: false
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.displayTooltip = this.displayTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  toggleTooltip(event) {
    const { isTooltipDisplayed } = this.state;
    event.preventDefault();
    if (isTooltipDisplayed) {
      this.setState({
        isTooltipDisplayed: false
      });
    } else {
      this.setState({
        isTooltipDisplayed: true
      });
    }
  }

  displayTooltip(event) {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true
    });
  }

  hideTooltip(event) {
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false
    });
  }

  render() {
    const {
      votesPercent,
      voteStaticParams,
      proposalId,
      tabIndex,
      voteKey,
      index
    } = this.props;
    const { isTooltipDisplayed } = this.state;
    return (
      <ResultItemComponent
        key={getVoteIndex(voteKey, proposalId)}
        listKey={getVoteIndex(voteKey, proposalId)}
        barKey={VoteResultHelper.getResultBarIndex(voteKey, proposalId)}
        tooltipKey={VoteResultHelper.getTooltipIndex(voteKey, proposalId)}
        index={index}
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

export default ResultItemContainer;
