/* @flow */
import * as React from 'react';
import {
  BottomTooltipStyle,
  TooltipStyle,
} from 'Client/ui/Elements/TooltipElements';
import { VoteButtonElement } from 'Client/ui/Elements/Vote/Button';
import { ButtonWrapperStyle } from '../Styled';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Rotate property passed to Styled Component */
  rotate: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** Boolean Toggle when Tooltip is shown / hidden */
  isTooltipDisplayed: boolean,
  /** When display pending */
  displayPending: boolean,
  /** Method called onMouseLeave to hide Tooltip */
  hideTooltip: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called onMouseEnter to  show Tooltip */
  displayTooltip: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called when vote button is clicked */
  handleVote: (SyntheticEvent<HTMLButtonElement>) => void,
};

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
    buttonType,
    handleVote,
    displayTooltip,
    hideTooltip,
    isTooltipDisplayed,
    displayPending,
  } = props;

  return (
    <ButtonWrapperStyle>
      <VoteButtonElement
        color={color}
        label={label}
        icon={icon}
        rotate={rotate}
        tabIndex={tabIndex}
        buttonType={buttonType}
        handleVote={handleVote}
        displayTooltip={displayTooltip}
        hideTooltip={hideTooltip}
        displayPending={displayPending}
      />
      <TooltipStyle
        as={isTooltipDisplayed ? BottomTooltipStyle : ''}
        aria-hidden
      >
        <p>{label}</p>
      </TooltipStyle>
    </ButtonWrapperStyle>
  );
};
