/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { getVoteIndex } from '../../helpers/vote';
import Vote from './Styled';
import { VoteButton } from './Styled/Button';
import VoteButtonComponent from './Button';
import { HiddenItem } from '../Elements/HiddenElements';
import voteStaticParams from '../../constants/vote';


type VoteButtonsProps = {
  proposalId: string,
  tabIndex: number,
  handleVote: Function
};

const VoteButtonsComponent = (props: VoteButtonsProps) => {
  const {
    proposalId,
    tabIndex,
    handleVote
  } = props;
  const voteKeys = Object.keys(voteStaticParams);

  return (
    voteKeys.map<React.Node>((voteKey: string) => (
      <VoteButtonComponent
        key={getVoteIndex(voteKey, proposalId)}
        color={voteStaticParams[voteKey].color}
        label={i18next.t(`vote.${voteKey}`)}
        icon={voteStaticParams[voteKey].icon}
        rotate={voteStaticParams[voteKey].rotate}
        handleVote={event => handleVote(event, voteKey)}
        buttonType={VoteButton}
        tabIndex={tabIndex}
      />
    ))
  );
};

type VoteProps = {
  proposalId: string,
  hasVoted: boolean,
  votedKey: string,
  tabIndex: number,
  handleVote: Function
};

const VoteComponent = (props: VoteProps) => {
  const {
    proposalId,
    tabIndex,
    hasVoted,
    votedKey,
    handleVote
  } = props;

  return (
    <Vote>
      <HiddenItem aria-hidden as="h3">{i18next.t('vote.intro_title')}</HiddenItem>
      <HiddenItem aria-hidden>{i18next.t('vote.intro_text')}</HiddenItem>
      <Vote.Wrapper>
        <VoteButtonsComponent
          tabIndex={tabIndex}
          proposalId={proposalId}
          hasVoted={hasVoted}
          votedKey={votedKey}
          handleVote={handleVote}
        />
      </Vote.Wrapper>
    </Vote>
  );
};

export default VoteComponent;
