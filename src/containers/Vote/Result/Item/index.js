import React from 'react';
import { getResultBarIndex, getTooltipIndex } from '../../../../helpers/voteresults';
import ResultItemComponent from '../../../../components/Vote/Result/Item';
import { getVoteIndex } from '../../../../helpers/vote';
import Tracking from '../../../../services/Tracking';

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
    const { proposalId, voteKey, index } = this.props;
    const { isTooltipDisplayed } = this.state;
    event.preventDefault();
    if (isTooltipDisplayed) {
      this.setState({
        isTooltipDisplayed: false
      });
      Tracking.trackHideResults(proposalId, voteKey, index);
    } else {
      this.setState({
        isTooltipDisplayed: true
      });
      Tracking.trackDisplayResults(proposalId, voteKey, index);
    }
  }

  displayTooltip(event) {
    const { proposalId, voteKey, index } = this.props;
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: true
    });
    Tracking.trackDisplayResults(proposalId, voteKey, index);
  }

  hideTooltip(event) {
    const { proposalId, voteKey, index } = this.props;
    event.preventDefault();
    this.setState({
      isTooltipDisplayed: false
    });
    Tracking.trackHideResults(proposalId, voteKey, index);
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
        barKey={getResultBarIndex(voteKey, proposalId)}
        tooltipKey={getTooltipIndex(voteKey, proposalId)}
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
