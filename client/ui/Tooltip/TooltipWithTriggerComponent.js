import React from 'react';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  TooltipWrapperStyle,
  TooltipStyle,
} from 'Client/ui/Elements/TooltipElements';

type Props = {
  /** Styled Component Element used as Tooltip Wrapper */
  tooltipWrapper: React.Component,
  /** Content of the button */
  triggerContent: React.Component,
  /** Content of the Tooltip element */
  children: React.Component | string,
  /** Styled Component Element used as button */
  triggerType: React.Component,
  /** Styled Component Element used as Tooltip Element */
  tooltipType: React.Component,
  /** Method to show tooltip */
  toggleTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method to show tooltip */
  displayTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method to hide tooltip */
  hideTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
  /** Tab Index for button */
  tabIndex: number,
  /** Custom z-index for tooltip */
  zIndex: number,
};

export const TooltipWithTriggerComponent = (props: Props) => {
  const {
    tooltipWrapper,
    triggerContent,
    children,
    triggerType,
    tooltipType,
    toggleTooltip,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed,
    tabIndex,
    zIndex,
  } = props;

  return (
    <TooltipWrapperStyle as={tooltipWrapper} zIndex={zIndex}>
      <UnstyledButtonStyle
        as={triggerType}
        onClick={toggleTooltip}
        onMouseEnter={displayTooltip}
        onMouseLeave={hideTooltip}
        onFocus={displayTooltip}
        onBlur={hideTooltip}
        tabIndex={tabIndex}
      >
        {triggerContent}
      </UnstyledButtonStyle>
      <TooltipStyle
        as={isTooltipDisplayed ? tooltipType : ''}
        role="tooltip"
        zIndex={zIndex}
      >
        {children}
      </TooltipStyle>
    </TooltipWrapperStyle>
  );
};
