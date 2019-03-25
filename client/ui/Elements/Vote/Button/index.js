/* @flow */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonStyle, VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';

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
  /** When display pending */
  displayPending: boolean,
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
    buttonType,
    handleVote,
    displayTooltip,
    hideTooltip,
    displayPending,
  } = props;

  return (
    <ButtonStyle
      aria-label={displayPending ? i18n.t('common.loading') : label}
      tabIndex={tabIndex}
      color={color}
      rotate={displayPending ? 0 : rotate}
      as={buttonType}
      onClick={handleVote}
      onTouchEnd={handleVote}
      onMouseEnter={displayTooltip}
      onMouseLeave={hideTooltip}
      onFocus={displayTooltip}
      onBlur={hideTooltip}
    >
      {displayPending ? <LoadingDots /> : <FontAwesomeIcon icon={icon} />}
    </ButtonStyle>
  );
};

VoteButtonElement.defaultProps = {
  buttonType: VoteButtonStyle,
  hideTooltip: undefined,
  displayTooltip: undefined,
  handleVote: undefined,
  rotate: 0,
};
