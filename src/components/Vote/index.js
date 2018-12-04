/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { getVoteKey, getVoteButtonId } from '../../helpers/vote';
import Vote from './Styled';
import { VoteButton } from './Styled/Button';
import VoteButtonComponent from './Button';
import { HiddenItem } from '../Elements/HiddenElements';
import voteStaticParams from '../../constants/vote';

type VoteButtonsProps = {
  proposalId: string,
  index: number,
  tabIndex: number,
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
      <VoteButtonComponent
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
  proposalId: string,
  index: number,
  tabIndex: number,
  handleVote: Function
};

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

export default VoteComponent;
