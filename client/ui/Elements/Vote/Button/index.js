/* @flow */
import * as React from 'react';
import {
  ButtonStyle,
  VoteButtonStyle,
  ButtonIconWrapperStyle,
} from 'Client/ui/Elements/Vote/Styled';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: React.Node,
  /** Vote key's Rotate */
  transform: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType?: React.Node,
  /** When display pending */
  displayPending?: boolean,
  /** Vote key */
  voteKey?: string,
  /** Trigged animation on vote button after API response */
  animateVote?: boolean,
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
    transform,
    buttonType,
    handleVote,
    voteKey = '',
    animateVote = false,
    displayPending,
  } = props;

  return (
    <ButtonStyle
      aria-label={displayPending ? i18n.t('common.loading') : label}
      className={animateVote ? `${voteKey} animated` : `${voteKey}`}
      color={color}
      transform={transform}
      as={buttonType}
      onClick={handleVote}
      onTouchEnd={handleVote}
      aria-busy={displayPending}
      data-cy-button="vote"
      data-cy-vote-key={voteKey}
    >
      {displayPending && !animateVote ? (
        <LoadingDots />
      ) : (
        <ButtonIconWrapperStyle transform={transform}>
          {icon}
        </ButtonIconWrapperStyle>
      )}
    </ButtonStyle>
  );
};

VoteButtonElement.defaultProps = {
  buttonType: VoteButtonStyle,
  handleVote: undefined,
  displayPending: false,
};
