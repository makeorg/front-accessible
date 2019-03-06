import React from 'react';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  TopTooltipStyle,
  DisplayedTooltipStyle,
} from 'Client/ui/Elements/TooltipElments';
import { Avatar } from 'Client/ui/Avatar';
import { AvatarWrapperStyle } from 'Client/features/consultation/Styled/Partners';

type Props = {
  /** Partner name */
  partnerName: string,
  /** Partner logo path */
  partnerLogo: string,
  /** Partner is a founder or not */
  isFounder: boolean,
  /** Method to show tooltip */
  displayTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method to hide tooltip */
  hideTooltip: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
};

export const AvatarComponent = (props: Props) => {
  const {
    partnerName,
    partnerLogo,
    isFounder,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed,
  } = props;

  return (
    <AvatarWrapperStyle>
      <UnstyledButtonStyle
        onMouseEnter={displayTooltip}
        onMouseLeave={hideTooltip}
        onFocus={displayTooltip}
        onBlur={hideTooltip}
        aria-hidden
      >
        <Avatar customAvatar avatarSize={50}>
          <img src={partnerLogo} alt={partnerName} aria-hidden />
        </Avatar>
      </UnstyledButtonStyle>
      <TopTooltipStyle
        as={isTooltipDisplayed ? DisplayedTooltipStyle : ''}
        role="tooltip"
      >
        <p>{partnerName}</p>
        {isFounder && (
          <React.Fragment>
            <p>-</p>
            <p>Partenaire Fondateur</p>
          </React.Fragment>
        )}
      </TopTooltipStyle>
    </AvatarWrapperStyle>
  );
};
