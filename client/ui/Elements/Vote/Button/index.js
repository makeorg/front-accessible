/* @flow */
import * as React from 'react';
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
  /** React Element passed to Styled Component to render correct html tag */
  buttonType?: React.Node,
  /** When display pending */
  displayPending: boolean,
  /** Method called when vote button is clicked */
  handleVote?: (SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Vote Button element
 */
export const VoteButtonElement = (props: Props) => {
  const { color, label, icon, buttonType, handleVote, displayPending } = props;

  return (
    <ButtonStyle
      aria-label={displayPending ? i18n.t('common.loading') : label}
      color={color}
      as={buttonType}
      onClick={handleVote}
      onTouchEnd={handleVote}
    >
      {displayPending ? <LoadingDots /> : icon}
    </ButtonStyle>
  );
};

VoteButtonElement.defaultProps = {
  buttonType: VoteButtonStyle,
  handleVote: undefined,
};
