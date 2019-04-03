import React from 'react';
import { TooltipStyle } from 'Client/ui/Elements/TooltipElements';

type Props = {
  /** Content of the button */
  content: React.Component,
  /** Content of the Tooltip element */
  children: React.Component | string,
  /** Styled Component Element used as button */
  type: React.Component,
  /** Method to show tooltip */
  showTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method to hide tooltip */
  hideTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when tooltip is shown / hidden */
  displayTooltip: boolean,
  /** Custom aria-label */
  ariaLabel: sting,
};

export const TooltipComponent = (props: Props) => {
  const {
    content,
    children,
    type,
    displayTooltip,
    showTooltip,
    hideTooltip,
    ariaLabel,
  } = props;

  return (
    <React.Fragment>
      <span
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-label={ariaLabel}
      >
        {children}
      </span>
      {displayTooltip && (
        <TooltipStyle as={type} aria-hidden={false} role="tooltip">
          {content}
        </TooltipStyle>
      )}
    </React.Fragment>
  );
};
