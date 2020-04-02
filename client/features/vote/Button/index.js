/* @flow */
import React, { type Node } from 'react';
import { Tooltip } from 'Client/ui/Tooltip';
import { VoteButtonElement } from 'Client/ui/Elements/Vote/Button';
import { VoteButtonWrapperStyle } from '../Styled';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's tranform properties */
  transform: string,
  /** Vote key's Icon */
  icon: Node,
  /** Vote key */
  voteKey: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: Node,
  /** When button is in pending mode */
  displayPending: boolean,
  /** Method called when vote button is clicked */
  handleVote: () => void | Promise<void>,
  /** Trigged animation on vote button after API response */
  animateVote: boolean,
  /** add tooltip for vote button */
  showTooltip?: boolean,
  /** Boolean to disable click event on the qualification button */
  disableClick?: boolean,
};

/**
 * Handles Vote Button Business Logic
 */
export const VoteButton = ({
  color,
  label,
  transform,
  icon,
  voteKey,
  buttonType,
  displayPending,
  handleVote,
  animateVote,
  showTooltip = true,
  disableClick = false,
}: Props) => {
  const handleVoteAction = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!displayPending) {
      handleVote();
    }
  };

  return (
    <VoteButtonWrapperStyle>
      {showTooltip ? (
        <Tooltip content={label} direction="bottom">
          <VoteButtonElement
            color={color}
            label={label}
            icon={icon}
            voteKey={voteKey}
            transform={transform}
            buttonType={buttonType}
            handleVote={handleVoteAction}
            animateVote={animateVote}
            displayPending={displayPending}
            disableClick={disableClick}
          />
        </Tooltip>
      ) : (
        <VoteButtonElement
          color={color}
          label={label}
          icon={icon}
          voteKey={voteKey}
          transform={transform}
          buttonType={buttonType}
          handleVote={handleVoteAction}
          animateVote={animateVote}
          displayPending={displayPending}
          disableClick={disableClick}
        />
      )}
    </VoteButtonWrapperStyle>
  );
};
