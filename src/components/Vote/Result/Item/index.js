import React from 'react';
import i18next from 'i18next';
import {
  Bar,
  Tooltip,
  DisplayedTooltip,
  HiddenTooltip
} from '../Styled/Graph';

class ResultItemComponent extends React.Component {
  render() {
    const {
      listKey,
      barKey,
      tooltipKey,
      voteColor,
      votePercent,
      tabIndex,
      voteKey,
      toggleTooltip,
      displayTooltip,
      hideTooltip,
      isTooltipDisplayed
    } = this.props;
    return (
      <li key={listKey}>
        <Bar
          key={barKey}
          color={voteColor}
          percent={votePercent}
          tabIndex={tabIndex}
          onClick={toggleTooltip}
          onMouseEnter={displayTooltip}
          onMouseLeave={hideTooltip}
          onFocus={displayTooltip}
          onBlur={hideTooltip}
          aria-controls={tooltipKey}
          aria-label={i18next.t(`results.tooltipbutton.${voteKey}`)}
        />
        <Tooltip
          key={tooltipKey}
          id={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltip : HiddenTooltip}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{i18next.t(`vote.${voteKey}`)}</p>
          <p>{`${votePercent} %`}</p>
        </Tooltip>
      </li>
    );
  }
}

export default ResultItemComponent;
