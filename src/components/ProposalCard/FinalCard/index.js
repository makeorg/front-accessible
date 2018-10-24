import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProposalCard from '../Styled';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

class FinalCardComponent extends React.Component {
  render() {
    const {
      index,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed,
      goToPreviousCard
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <ProposalCard
        position={position}
        scale={scale}
        zindex={zindex}
        className={index < currentIndex ? 'collpased-card' : ''}
      >
        <ProposalCard.FakeNavWrapper>
          <ProposalCard.BackButton
            tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
            onClick={goToPreviousCard}
          >
            <ProposalCard.BackIcon>
              <FontAwesomeIcon aria-hidden="true" icon={faArrowLeft} />
            </ProposalCard.BackIcon>
            Proposition précédente
          </ProposalCard.BackButton>
        </ProposalCard.FakeNavWrapper>
        <ProposalCard.FinalParagraph>
          Merci de votre participation,
          <br />
          vous pouvez maintenant accéder à la consultation complète.
        </ProposalCard.FinalParagraph>
        <ProposalCard.FinalLink
          as="a"
          tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
          href="#"
          target="_blank"
        >
          Voir toutes les propositions
        </ProposalCard.FinalLink>
      </ProposalCard>
    );
  }
}

export default FinalCardComponent;
