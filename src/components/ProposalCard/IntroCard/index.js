import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from '../../Elements/ButtonElements';
import { Small } from '../../Elements/Separators';
import ProposalCard from '../Styled';

class IntroCardComponent extends React.Component {
  render() {
    return (
      <ProposalCard.IntroProposalCard>
        <header>
          <ProposalCard.IntroTitle>
            Des milliers de citoyens proposent des solutions.
          </ProposalCard.IntroTitle>
        </header>
        <Small aria-hidden="true" />
        <ProposalCard.IntroParagraph id="introduction">
          Prenez position sur ces solutions & proposez les vôtres.
          <br />
          Les meilleures détermineront nos actions.
        </ProposalCard.IntroParagraph>
        <ProposalCard.IntroButton>
          <IconInButton>
            <FontAwesomeIcon aria-hidden="true" icon={faPlay} />
          </IconInButton>
          Demarrer
        </ProposalCard.IntroButton>
      </ProposalCard.IntroProposalCard>
    );
  }
}

export default IntroCardComponent;
