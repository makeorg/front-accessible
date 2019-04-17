/* @flow */
import * as React from 'react';
import { Tooltip } from 'Client/ui/Tooltip';
import { VoteButtonElement } from 'Client/ui/Elements/Vote/Button';
import { VoteButtonWrapperStyle } from '../Styled';

type Props = {
  /** Color property passed to Styled Component */
  color: string,
  /** Vote key's Label */
  label: string,
  /** Vote key's Icon */
  icon: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** When display pending */
  displayPending: boolean,
  /** Method called when vote button is clicked */
  handleVote: (SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Vote Button element with Tooltip
 */
const VoteButtonWithTooltip = ({
  color,
  label,
  icon,
  buttonType,
  handleVote,
  displayPending,
}) => {
  const content = <p>{label}</p>;
  const children = (
    <VoteButtonElement
      color={color}
      label={label}
      icon={icon}
      buttonType={buttonType}
      handleVote={handleVote}
      displayPending={displayPending}
    />
  );

  return (
    <Tooltip content={content} direction="bottom">
      {children}
    </Tooltip>
  );
};

/**
 * Renders Vote Button element
 */
export const VoteButtonComponent = (props: Props) => {
  const { color, label, icon, buttonType, handleVote, displayPending } = props;

  return (
    <VoteButtonWrapperStyle>
      <VoteButtonWithTooltip
        color={color}
        label={label}
        icon={icon}
        buttonType={buttonType}
        handleVote={handleVote}
        displayPending={displayPending}
      />
    </VoteButtonWrapperStyle>
  );
};
