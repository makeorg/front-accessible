/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { voteStaticParams } from 'Shared/constants/vote';
import { getVoteKey } from 'Shared/helpers/vote';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { VoteButtonElement } from 'Client/ui/Elements/Vote/Button';
import * as VoteStyle from './Styled';

type VoteButtonsProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** When waiting response from API */
  pending: boolean,
  /** pending Vote key property */
  pendingVoteKey: string,
  /** Method called when vote button is clicked */
  handleVote: string => void,
};

export const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const { proposalId, tabIndex, handleVote, pending, pendingVoteKey } = props;
  const voteKeys = Object.keys(voteStaticParams);

  const handleVoteIfNotPending = (
    event: SyntheticEvent<*>,
    voteKey: string
  ) => {
    event.preventDefault();
    if (!pending) {
      handleVote(voteKey);
    }
  };

  return voteKeys.map<React.Node>((voteKey: string) => (
    <VoteButtonElement
      key={getVoteKey(voteKey, proposalId)}
      color={voteStaticParams[voteKey].color}
      label={i18n.t(`vote.${voteKey}`)}
      icon={voteStaticParams[voteKey].icon}
      rotate={voteStaticParams[voteKey].rotate}
      buttonType={VoteButtonStyle}
      tabIndex={tabIndex}
      handleVote={event => handleVoteIfNotPending(event, voteKey)}
      pending={pending && pendingVoteKey === voteKey}
    />
  ));
};

type VoteProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Tabindex for interactive items */
  tabIndex: number,
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
  const { proposalId, tabIndex, handleVote, pending, pendingVoteKey } = props;

  return (
    <VoteStyle.ContainerStyle>
      <HiddenItemStyle aria-hidden as="h3">
        {i18n.t('vote.intro_title')}
      </HiddenItemStyle>
      <HiddenItemStyle aria-hidden>{i18n.t('vote.intro_text')}</HiddenItemStyle>
      <VoteStyle.WrapperStyle>
        <VoteButtonsComponent
          proposalId={proposalId}
          tabIndex={tabIndex}
          handleVote={handleVote}
          pending={pending}
          pendingVoteKey={pendingVoteKey}
        />
      </VoteStyle.WrapperStyle>
    </VoteStyle.ContainerStyle>
  );
};
