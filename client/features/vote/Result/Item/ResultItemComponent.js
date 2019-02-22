/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import {
  LeftTooltipStyle,
  BottomTooltipStyle,
  DisplayedTooltipStyle,
} from 'Client/ui/Elements/TooltipElments';
import {
  HiddenOnMobileStyle,
  HiddenOnDesktopStyle,
} from 'Client/ui/Elements/HiddenElements';
import * as Graph from '../Styled';

type Props = {
  /** id to set key for list element */
  listKey: string,
  /** Method to set key for bar element */
  barKey: string,
  /** Method to set key for tooltip element */
  tooltipKey: string,
  /** Vote key's color */
  voteColor: string,
  /** Vote key's percentage */
  votePercent: number,
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
  isTooltipDisplayed: boolean,
};

/**
 * Renders Vote Result Bar & Tooltip elements
 */
export const ResultItemComponent = (props: Props) => {
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
    isTooltipDisplayed,
  } = props;

  return (
    <Graph.ItemStyle key={listKey}>
      <Graph.BarStyle
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
        aria-label={i18n.t(`results.tooltipbutton.${voteKey}`)}
      />
      <HiddenOnDesktopStyle>
        <BottomTooltipStyle
          key={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltipStyle : ''}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{i18n.t(`vote.${voteKey}`)}</p>
          <p>{`${votePercent} %`}</p>
        </BottomTooltipStyle>
      </HiddenOnDesktopStyle>
      <HiddenOnMobileStyle>
        <LeftTooltipStyle
          key={tooltipKey}
          as={isTooltipDisplayed ? DisplayedTooltipStyle : ''}
          aria-hidden={!isTooltipDisplayed}
          role="tooltip"
        >
          <p>{i18n.t(`vote.${voteKey}`)}</p>
          <p>{`${votePercent} %`}</p>
        </LeftTooltipStyle>
      </HiddenOnMobileStyle>
    </Graph.ItemStyle>
  );
};
