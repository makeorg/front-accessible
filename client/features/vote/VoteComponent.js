/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import voteStaticParams from 'Shared/constants/vote';
import { getVoteKey, getVoteButtonId } from 'Shared/helpers/vote';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import Vote from './Styled';
import { VoteButton } from './Button';
import { VoteButton as VoteButtonStyle } from './Styled/Button';

type VoteButtonsProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Index of the card */
  index?: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  handleVote: Function
};

export const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const {
    proposalId,
    index,
    tabIndex,
    handleVote
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    voteKeys.map<React.Node>((voteKey: string) => (
      <VoteButton
        key={getVoteKey(voteKey, proposalId)}
        color={voteStaticParams[voteKey].color}
        label={i18next.t(`vote.${voteKey}`)}
        icon={voteStaticParams[voteKey].icon}
        rotate={voteStaticParams[voteKey].rotate}
        buttonType={VoteButtonStyle}
        tabIndex={tabIndex}
        id={getVoteButtonId(voteKey, index)}
        handleVote={event => handleVote(event, voteKey)}
      />
    ))
  );
};

type VoteProps = {
  /** Proposal's Id */
  proposalId: string,
  /** Index of the card */
  index?: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when vote button is clicked */
  handleVote: Function
};


/**
 * Renders Vote component
 */
export const VoteComponent = (props: VoteProps) => {
  const {
    proposalId,
    index,
    tabIndex,
    handleVote
  } = props;

  return (
    <Vote>
      <HiddenItemStyle aria-hidden as="h3">{i18next.t('vote.intro_title')}</HiddenItemStyle>
      <HiddenItemStyle aria-hidden>{i18next.t('vote.intro_text')}</HiddenItemStyle>
      <Vote.Wrapper>
        <VoteButtonsComponent
          proposalId={proposalId}
          index={index}
          tabIndex={tabIndex}
          handleVote={handleVote}
        />
      </Vote.Wrapper>
    </Vote>
  );
};

VoteComponent.defaultProps = {
  index: undefined
};
