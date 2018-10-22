import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProgressBarContainer from '../../containers/ProposalCard/ProgressBar';
import ProposalCard from './Styled';
import { getPosition, getScale, getZIndex } from '../../helpers/sequence';

class ProposalCardComponent extends React.Component {
  render() {
    const { proposal, index } = this.props;
    const position = getPosition(index);
    const scale = getScale(index);
    const zindex = getZIndex(index);

    return (
      <ProposalCard position={position} scale={scale} zindex={zindex}>
        <ProposalCard.FakeNavWrapper>
          <ProposalCard.BackButton>
            <ProposalCard.BackIcon>
              <FontAwesomeIcon aria-hidden="true" icon={faArrowLeft} />
            </ProposalCard.BackIcon>
            Proposition précédente
          </ProposalCard.BackButton>
          <ProgressBarContainer />
        </ProposalCard.FakeNavWrapper>
        <ProposalCard.AuthorInfos>
          {proposal.author.firstName}
          &nbsp;
          <time dateTime="dateTime">
            {proposal.createdAt}
          </time>
        </ProposalCard.AuthorInfos>
        <ProposalCard.Sep aria-hidden="true" />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
      </ProposalCard>
    );
  }
}

export default ProposalCardComponent;
