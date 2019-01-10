/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { LeftTooltip, BottomTooltip, DisplayedTooltip } from 'Components/Elements/TooltipElments';
import { HiddenOnMobile, HiddenOnDesktop } from 'Components/Elements/HiddenElements';
import { Bar, GraphItem } from '../Styled/Graph';

type Props = {
  /** Method to set key for list element */
  listKey: Function,
  /** Method to set key for bar element */
  barKey: Function,
  /** Method to set key for tooltip element */
  tooltipKey: Function,
  /** Vote key's color */
  voteColor: string,
  /** Vote key's percentage */
  votePercent: Object,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Vote key */
  voteKey: string,
  /** Method to toggle tooltip with votes results */
  toggleTooltip: Function,
  /** Method to show tooltip with votes results */
  displayTooltip: Function,
  /** Method to hide tooltip with votes results */
  hideTooltip: Function,
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean
}


/**
 * Renders Vote Result Bar & Tooltip elements
 */
const ResultItemComponent = (props: Props) => {
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
  } = props;

  return (
    <GraphItem key={listKey}>
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
      <HiddenOnDesktop>
        <BottomTooltip
          key={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltip : ''}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{i18next.t(`vote.${voteKey}`)}</p>
          <p>{`${votePercent} %`}</p>
        </BottomTooltip>
      </HiddenOnDesktop>
      <HiddenOnMobile>
        <LeftTooltip
          key={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltip : ''}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{i18next.t(`vote.${voteKey}`)}</p>
          <p>{`${votePercent} %`}</p>
        </LeftTooltip>
      </HiddenOnMobile>
    </GraphItem>
  );
};

export default ResultItemComponent;
