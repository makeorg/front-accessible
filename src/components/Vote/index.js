import React from 'react';
import Vote from './Styled';
import { HiddenItem } from '../Elements/HiddenElements';
import { SpaceBetweenRow } from '../Elements/FlexElements';
import { setVoteIndex } from '../../helpers/vote';
import VoteButtonComponent from './Button';

class VoteComponent extends React.Component {
  render() {
    const { voteStaticParams, proposalIndex } = this.props;
    const voteKeys = Object.keys(voteStaticParams);
    return (
      <Vote>
        <Vote.Fieldset as="fieldset">
          <legend>
            <HiddenItem as="h3">Je donne mon avis sur cette proposition. </HiddenItem>
            <HiddenItem>Je suis : </HiddenItem>
          </legend>
          <SpaceBetweenRow>
            {voteKeys.map(voteKey => (
              <VoteButtonComponent
                key={setVoteIndex(voteKey, proposalIndex)}
                name={setVoteIndex(voteKey, proposalIndex)}
                color={voteStaticParams[voteKey].color}
                label={voteStaticParams[voteKey].label}
                icon={voteStaticParams[voteKey].icon}
                rotate={voteStaticParams[voteKey].rotate}
              />
            ))}
          </SpaceBetweenRow>
        </Vote.Fieldset>
      </Vote>
    );
  }
}

export default VoteComponent;
