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
  icon: React.Node,
  /** Vote key's tranform properties */
  transform: string,
  /** React Element passed to Styled Component to render correct html tag */
  buttonType: React.Node,
  /** When display pending */
  displayPending: boolean,
  /** Show Tooltip */
  showTooltip: ?boolean,
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
  transform,
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
      transform={transform}
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
  const {
    color,
    label,
    icon,
    transform,
    buttonType,
    handleVote,
    displayPending,
    showTooltip,
  } = props;

  return (
    <VoteButtonWrapperStyle>
      {showTooltip ? (
        <VoteButtonWithTooltip
          color={color}
          label={label}
          icon={icon}
          transform={transform}
          buttonType={buttonType}
          handleVote={handleVote}
          displayPending={displayPending}
        />
      ) : (
        <VoteButtonElement
          color={color}
          label={label}
          icon={icon}
          transform={transform}
          buttonType={buttonType}
          handleVote={handleVote}
          displayPending={displayPending}
        />
      )}
    </VoteButtonWrapperStyle>
  );
};
