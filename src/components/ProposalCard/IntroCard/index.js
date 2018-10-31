import React from 'react';
import i18next from 'i18next';
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
      handleStartSequence
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
            {i18next.t('proposal_card.intro_title')}
          </ProposalCard.IntroTitle>
        </header>
        <Small aria-hidden />
        <ProposalCard.IntroParagraph
          id="introduction"
          dangerouslySetInnerHTML={{ __html: i18next.t('proposal_card.intro_text') }}
        />
        <ProposalCard.IntroButton
          tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
          onClick={handleStartSequence}
        >
          <IconInButton>
            <FontAwesomeIcon
              aria-hidden
              icon={faPlay}
            />
          </IconInButton>
          {i18next.t('proposal_card.intro_start')}
        </ProposalCard.IntroButton>
      </ProposalCard.IntroProposalCard>
    );
  }
}

export default IntroCardComponent;
