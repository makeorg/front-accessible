import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CenterColumn } from 'Components/Elements/FlexElements';
import ProgressBarComponent from '../ProgressBar';
import ProposalCard from '../Styled';

class FinalCardComponent extends React.Component {
  render() {
    const {
      linkUrl,
      index,
      currentIndex,
      goToPreviousCard,
      cardsCount,
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
        <ProposalCard.BackButtonWrapper>
          <ProposalCard.BackButton
            tabIndex={tabIndex}
            onClick={goToPreviousCard}
          >
            <ProposalCard.BackIcon>
              <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
            </ProposalCard.BackIcon>
            {i18next.t('proposal_card.previous')}
          </ProposalCard.BackButton>
          <ProgressBarComponent index={index} cardsCount={cardsCount} />
        </ProposalCard.BackButtonWrapper>
        <ProposalCard.InnerContent>
          <CenterColumn as="section">
            <ProposalCard.FinalParagraph dangerouslySetInnerHTML={{ __html: i18next.t('final_card.title') }} />
            <ProposalCard.FinalLink
              as="a"
              tabIndex={tabIndex}
              href={linkUrl}
              target="_blank"
              onClick={handleEndSequence}
            >
              {i18next.t('final_card.button')}
            </ProposalCard.FinalLink>
          </CenterColumn>
        </ProposalCard.InnerContent>
      </ProposalCard>
    );
  }
}

export default FinalCardComponent;
