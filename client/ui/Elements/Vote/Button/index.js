/* @flow */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonStyle, VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType?: React.Node,
  /** Rotate property passed to Styled Component */
  rotate?: number,
  /** Id of vote button */
  id?: string,
  /** When waiting response from API */
  pending: boolean,
  /** Method called onMouseLeave to hide Tooltip */
  hideTooltip?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called onMouseEnter to  show Tooltip */
  displayTooltip?: (SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called when vote button is clicked */
  handleVote?: (SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Vote Button element
 */
export const VoteButtonElement = (props: Props) => {
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
    pending,
  } = props;

  return (
    <ButtonStyle
      aria-label={label}
      id={id}
      tabIndex={tabIndex}
      color={color}
      rotate={pending ? 0 : rotate}
      as={buttonType}
      onClick={handleVote}
      onTouchEnd={handleVote}
      onMouseEnter={displayTooltip}
      onMouseLeave={hideTooltip}
      onFocus={displayTooltip}
      onBlur={hideTooltip}
    >
      {pending ? <LoadingDots /> : <FontAwesomeIcon icon={icon} />}
    </ButtonStyle>
  );
};

VoteButtonElement.defaultProps = {
  buttonType: VoteButtonStyle,
  hideTooltip: undefined,
  displayTooltip: undefined,
  handleVote: undefined,
  id: 'vote_button_element',
  rotate: 0,
};
