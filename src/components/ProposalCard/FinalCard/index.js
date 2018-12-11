import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { consultationLink } from 'Constants/config';
import ProposalCard from '../Styled';

class FinalCardComponent extends React.Component {
  render() {
    const {
      index,
      currentIndex,
      goToPreviousCard,
      handleEndSequence,
      position,
      scale,
      zindex,
      tabIndex
    } = this.props;

    return (
      <ProposalCard
        position={position}
        scale={scale}
        zindex={zindex}
        className={index < currentIndex ? 'collpased-card' : ''}
      >
        <ProposalCard.FakeNavWrapper>
          <ProposalCard.BackButton
            tabIndex={tabIndex}
            onClick={goToPreviousCard}
          >
            <ProposalCard.BackIcon>
              <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
            </ProposalCard.BackIcon>
            {i18next.t('proposal_card.previous')}
          </ProposalCard.BackButton>
        </ProposalCard.FakeNavWrapper>
        <ProposalCard.FinalParagraph dangerouslySetInnerHTML={{ __html: i18next.t('proposal_card.final_text') }} />
        <ProposalCard.FinalLink
          as="a"
          tabIndex={tabIndex}
          href={consultationLink}
          target="_blank"
          onClick={handleEndSequence}
        >
          {i18next.t('proposal_card.final_see_all')}
        </ProposalCard.FinalLink>
      </ProposalCard>
    );
  }
}

export default FinalCardComponent;
