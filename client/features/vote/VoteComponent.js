/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { voteStaticParams } from 'Shared/constants/vote';
import { getVoteKey } from 'Shared/helpers/vote';
import { ReadableItemStyle } from 'Client/ui/Elements/HiddenElements';
import { VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { VoteButton } from './Button';
import { VoteContainerStyle, VoteWrapperStyle } from './Styled';

type VoteButtonsProps = {
  /** Proposal's Id */
  proposalId: string,
  /** When waiting response from API */
  pending: boolean,
  /** pending Vote key property */
  pendingVoteKey: string,
  /** Method called when vote button is clicked */
  handleVote: string => void,
};

export const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const { proposalId, handleVote, pending, pendingVoteKey } = props;
  const voteKeys = Object.keys(voteStaticParams);

  const handleVoteIfAnyPending = voteKey => () => {
    if (!pending) {
      handleVote(voteKey);
    }
  };

  return voteKeys.map<React.Node>((voteKey: string) => (
    <li>
      <VoteButton
        key={getVoteKey(voteKey, proposalId)}
        color={voteStaticParams[voteKey].color}
        label={i18n.t(`vote.${voteKey}`)}
        icon={voteStaticParams[voteKey].icon}
        buttonType={VoteButtonStyle}
        handleVote={handleVoteIfAnyPending(voteKey)}
        displayPending={pendingVoteKey === voteKey}
      />
    </li>
  ));
};

type VoteProps = {
  /** Proposal's Id */
  proposalId: string,
  /** When waiting response from API */
  pending: boolean,
  /** pending Vote key property */
  pendingVoteKey: string,
  /** Method called when vote button is clicked */
  handleVote: string => void,
};

/**
 * Renders Vote component
 */
export const VoteComponent = (props: VoteProps) => {
  const { proposalId, handleVote, pending, pendingVoteKey } = props;

  return (
    <VoteContainerStyle>
      <ReadableItemStyle as="p">{i18n.t('vote.intro_title')}</ReadableItemStyle>
      <VoteWrapperStyle>
        <VoteButtonsComponent
          proposalId={proposalId}
          handleVote={handleVote}
          pending={pending}
          pendingVoteKey={pendingVoteKey}
        />
      </VoteWrapperStyle>
    </VoteContainerStyle>
  );
};
