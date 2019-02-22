/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { voteStaticParams } from 'Shared/constants/vote';
import { getVoteKey, getVoteButtonId } from 'Shared/helpers/vote';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { VoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import * as VoteStyle from './Styled';
import { VoteButton } from './Button';

type VoteButtonsProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Index of the card */
  index?: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  handleVote: (SyntheticEvent<HTMLButtonElement>, string) => void,
};

export const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const { proposalId, index, tabIndex, handleVote } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return voteKeys.map<React.Node>((voteKey: string) => (
    <VoteButton
      key={getVoteKey(voteKey, proposalId)}
      color={voteStaticParams[voteKey].color}
      label={i18n.t(`vote.${voteKey}`)}
      icon={voteStaticParams[voteKey].icon}
      rotate={voteStaticParams[voteKey].rotate}
      buttonType={VoteButtonStyle}
      tabIndex={tabIndex}
      id={getVoteButtonId(voteKey, index)}
      handleVote={event => handleVote(event, voteKey)}
    />
  ));
};

type VoteProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Index of the card */
  index?: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  handleVote: (SyntheticEvent<HTMLButtonElement>, string) => void,
};

/**
 * Renders Vote component
 */
export const VoteComponent = (props: VoteProps) => {
  const { proposalId, index, tabIndex, handleVote } = props;

  return (
    <VoteStyle.ContainerStyle>
      <HiddenItemStyle aria-hidden as="h3">
        {i18n.t('vote.intro_title')}
      </HiddenItemStyle>
      <HiddenItemStyle aria-hidden>{i18n.t('vote.intro_text')}</HiddenItemStyle>
      <VoteStyle.WrapperStyle>
        <VoteButtonsComponent
          proposalId={proposalId}
          index={index}
          tabIndex={tabIndex}
          handleVote={handleVote}
        />
      </VoteStyle.WrapperStyle>
    </VoteStyle.ContainerStyle>
  );
};

VoteComponent.defaultProps = {
  index: undefined,
};
