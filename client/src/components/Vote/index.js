/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import voteStaticParams from 'Src/constants/vote';
import { getVoteKey, getVoteButtonId } from 'Src/helpers/vote';
import { HiddenItem } from 'Src/components/Elements/HiddenElements';
import VoteButtonContainer from 'Src/containers/Vote/Button';
import Vote from './Styled';
import { VoteButton } from './Styled/Button';

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

const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const {
    proposalId,
    index,
    tabIndex,
    handleVote
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    voteKeys.map<React.Node>((voteKey: string) => (
      <VoteButtonContainer
        key={getVoteKey(voteKey, proposalId)}
        color={voteStaticParams[voteKey].color}
        label={i18next.t(`vote.${voteKey}`)}
        icon={voteStaticParams[voteKey].icon}
        rotate={voteStaticParams[voteKey].rotate}
        buttonType={VoteButton}
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
const VoteComponent = (props: VoteProps) => {
  const {
    proposalId,
    index,
    tabIndex,
    handleVote
  } = props;

  return (
    <Vote>
      <HiddenItem aria-hidden as="h3">{i18next.t('vote.intro_title')}</HiddenItem>
      <HiddenItem aria-hidden>{i18next.t('vote.intro_text')}</HiddenItem>
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

export default VoteComponent;
