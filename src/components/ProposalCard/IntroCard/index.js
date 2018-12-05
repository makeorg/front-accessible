/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from 'Components/Elements/ButtonElements';
import { Small } from 'Components/Elements/Separators';
import ExtraLogo from './ExtraLogo';
import IntroTitle from './Title';
import IntroDescription from './Description';
import Partners from './Partners';
import ProposalCard from '../Styled';

type Props = {
  introCardParams: Object,
  index: number,
  currentIndex: number,
  tabIndex: number,
  handleStartSequence: Function,
  position: number,
  scale: number,
  zindex: number
}

const IntroCardComponent = (props: Props) => {
  const {
    introCardParams,
    index,
    currentIndex,
    tabIndex,
    handleStartSequence,
    position,
    scale,
    zindex
  } = props;

  return (
    <ProposalCard.ProposalCardCentered
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collapsed-card' : ''}
    >
      <header>
        <ExtraLogo extraLogo={introCardParams && introCardParams.extraLogo} />
        <IntroTitle titleParams={introCardParams && introCardParams.title} />
      </header>
      <Small aria-hidden />
      <IntroDescription description={introCardParams && introCardParams.description} />
      <ProposalCard.IntroButton
        id="sequence-start-sequence-button"
        tabIndex={tabIndex}
        onClick={handleStartSequence}
      >
        <IconInButton>
          <FontAwesomeIcon
            aria-hidden
            icon={faPlay}
          />
        </IconInButton>
        {i18next.t('intro_card.button')}
      </ProposalCard.IntroButton>
      {introCardParams
        && (
          <Partners
            partners={introCardParams.partners}
            wording={introCardParams.inPartnershipWith}
          />
        )
      }
    </ProposalCard.ProposalCardCentered>
  );
};

export default IntroCardComponent;
