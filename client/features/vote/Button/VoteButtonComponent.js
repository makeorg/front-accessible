/* @flow */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomTooltipStyle, DisplayedTooltipStyle } from 'Client/ui/Elements/TooltipElments';
import { ButtonWrapper, Button } from '../Styled/Button';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Rotate property passed to Styled Component */
  rotate: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Id of vote button */
  id: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** Boolean Toggle when Tooltip is shown / hidden */
  isTooltipDisplayed?: boolean,
  /** Method called onMouseLeave to hide Tooltip */
  hideTooltip?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called onMouseEnter to  show Tooltip */
  displayTooltip?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called when vote button is clicked */
  handleVote: (SyntheticEvent<HTMLButtonElement>, string) => void,
}

/**
 * Renders Vote Button element
 */
export const VoteButtonComponent = (props: Props) => {
  const {
    color,
    label,
    icon,
    rotate,
    tabIndex,
    id,
    buttonType,
    handleVote,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed
  } = props;

  return (
    <ButtonWrapper>
      <Button
        aria-label={label}
        id={id}
        tabIndex={tabIndex}
        color={color}
        rotate={rotate}
        as={buttonType}
        onClick={handleVote}
        onTouchEnd={handleVote}
        onMouseEnter={displayTooltip}
        onMouseLeave={hideTooltip}
        onFocus={displayTooltip}
        onBlur={hideTooltip}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
      <BottomTooltipStyle
        as={isTooltipDisplayed ? DisplayedTooltipStyle : ''}
        aria-hidden={!isTooltipDisplayed}
        role="tooltip"
      >
        <p>{label}</p>
      </BottomTooltipStyle>
    </ButtonWrapper>
  );
};

VoteButtonComponent.defaultProps = {
  isTooltipDisplayed: false,
  hideTooltip: undefined,
  displayTooltip: undefined
};
