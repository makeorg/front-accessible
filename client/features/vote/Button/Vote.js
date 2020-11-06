// @flow
import React from 'react';
import { Tooltip } from 'Client/ui/Tooltip';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';
import {
  VoteIconStyle,
  VoteButtonStyle,
} from 'Client/ui/Elements/Buttons/style';

type ButtonProps = {
  /** Vote key */
  voteKey: string,
  /** button className */
  buttonClass?: string,
  /** When button is in pending mode */
  displayPending?: boolean,
  /** Method called when vote button is clicked */
  handleVote?: () => void | Promise<void>,
  /** Trigged animation on vote button after API response */
  animateVote?: boolean,
  /** Boolean to disable click event on the vote button */
  disableClick?: boolean,
};

const VoteButtonItem = ({
  voteKey,
  buttonClass = voteKey,
  displayPending = false,
  handleVote = () => {},
  animateVote = false,
  disableClick = false,
}: ButtonProps) => {
  const handleAPICall = () => {
    if (!animateVote && !displayPending) {
      handleVote();
    }
  };

  return (
    <VoteButtonStyle
      aria-label={
        displayPending ? i18n.t('common.loading') : i18n.t(`vote.${voteKey}`)
      }
      className={buttonClass}
      onClick={handleAPICall}
      onTouchEnd={handleAPICall}
      aria-busy={displayPending}
      data-cy-button="vote"
      data-cy-vote-key={voteKey}
      disabled={disableClick}
    >
      {displayPending && !animateVote ? (
        <LoadingDots />
      ) : (
        <VoteIconStyle className={buttonClass} aria-hidden focusable="false" />
      )}
    </VoteButtonStyle>
  );
};

type Props = {
  /** Vote key */
  voteKey: string,
  /** button className */
  buttonClass?: string,
  /** When button is in pending mode */
  displayPending?: boolean,
  /** Method called when vote button is clicked */
  handleVote?: () => void | Promise<void>,
  /** Trigged animation on vote button after API response */
  animateVote?: boolean,
  /** Boolean to disable click event on the vote button */
  disableClick?: boolean,
  /** Boolean to disable tooltip on button hover event */
  withTooltip?: boolean,
};

export const VoteButton = ({
  voteKey,
  buttonClass = voteKey,
  displayPending = false,
  handleVote = () => {},
  animateVote = false,
  disableClick = false,
  withTooltip = true,
}: Props) => {
  if (withTooltip) {
    return (
      <Tooltip content={i18n.t(`vote.${voteKey}`)} direction="bottom">
        <VoteButtonItem
          voteKey={voteKey}
          buttonClass={buttonClass}
          displayPending={displayPending}
          handleVote={handleVote}
          animateVote={animateVote}
          disableClick={disableClick}
        />
      </Tooltip>
    );
  }

  return (
    <VoteButtonItem
      voteKey={voteKey}
      buttonClass={buttonClass}
      displayPending={displayPending}
      handleVote={handleVote}
      animateVote={animateVote}
      disableClick={disableClick}
    />
  );
};
