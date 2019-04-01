import React from 'react';
import { type Partner } from 'Shared/types/partners';
import {
  TooltipWrapperStyle,
  TooltipStyle,
} from 'Client/ui/Elements/TooltipElements';
import { Avatar } from 'Client/ui/Avatar';
import { i18n } from 'Shared/i18n';

type Props = {
  partner: Partner,
  /** Styled Component Element used as Tooltip Wrapper */
  tooltipWrapper: React.Component,
  /** Styled Component Element used as Tooltip Element */
  tooltipType: React.Component,
  /** Method to show tooltip */
  displayTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method to hide tooltip */
  hideTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
  /** Custom z-index for tooltip */
  zIndex: number,
  /** Custom aria-label for display event */
  ariaLabelDisplay: sting,
  /** Custom aria-label for hide event */
  ariaLabelHide: sting,
};

export const PartnerTooltipComponent = (props: Props) => {
  const {
    partner,
    tooltipWrapper,
    tooltipType,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed,
    zIndex,
    ariaLabelDisplay,
    ariaLabelHide,
  } = props;

  return (
    <TooltipWrapperStyle as={tooltipWrapper} zIndex={zIndex}>
      <a
        href={partner.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={displayTooltip}
        onMouseLeave={hideTooltip}
        onFocus={displayTooltip}
        onBlur={hideTooltip}
        aria-label={isTooltipDisplayed ? ariaLabelHide : ariaLabelDisplay}
      >
        <Avatar avatarSize={50}>
          {partner.imageUrl && (
            <img src={partner.imageUrl} alt={partner.name} aria-hidden />
          )}
        </Avatar>
      </a>
      <TooltipStyle
        as={isTooltipDisplayed ? tooltipType : ''}
        aria-hidden={!isTooltipDisplayed}
        zIndex={zIndex}
        role="tooltip"
      >
        <p>{partner.name}</p>
        {partner.isFounder && (
          <React.Fragment>
            <p>-</p>
            <p>{i18n.t('consultation.partners.founder')}</p>
          </React.Fragment>
        )}
      </TooltipStyle>
    </TooltipWrapperStyle>
  );
};
