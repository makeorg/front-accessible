import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from '../../Elements/ButtonElements';
import { Small } from '../../Elements/Separators';
import ProposalCard from '../Styled';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

class IntroCardComponent extends React.Component {
  render() {
    const {
      index,
      isPannelOpen,
      isSequenceCollapsed,
      currentIndex,
      goToNextCard
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <ProposalCard.IntroProposalCard
        position={position}
        scale={scale}
        zindex={zindex}
        className={index < currentIndex ? 'collapsed-card' : ''}
      >
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
        <ProposalCard.IntroButton
          tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
          onClick={goToNextCard}
        >
          <IconInButton>
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faPlay}
            />
          </IconInButton>
          Demarrer
        </ProposalCard.IntroButton>
      </ProposalCard.IntroProposalCard>
    );
  }
}

export default IntroCardComponent;
