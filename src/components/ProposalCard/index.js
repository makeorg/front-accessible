import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProgressBarContainer from '../../containers/ProposalCard/ProgressBar';
import ProposalCard from './Styled';

class ProposalCardComponent extends React.Component {
  render() {
    return (
      <ProposalCard>
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
          Nom de l‘auteur ·
          <time dateTime="dateTime"> Date de la propoition</time>
        </ProposalCard.AuthorInfos>
        <ProposalCard.Sep aria-hidden="true" />
        <ProposalCard.Proposal>
          Il faut écrire une proposition qui soit accessible et qui fasse moins de 140 caractères.
        </ProposalCard.Proposal>
      </ProposalCard>
    );
  }
}

export default ProposalCardComponent;
