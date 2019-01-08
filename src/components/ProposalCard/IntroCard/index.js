// @flow
import * as React from 'react';
import type { IntroCardConfig, introCardWording } from 'Types/card';
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
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Object with Static properties used to customise the wording of the Intro Card */
  wording: introCardWording,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when button is clicked */
  handleStartSequence: () => void
}

/**
 * Renders Intro Card
 */
const IntroCardComponent = (props: Props) => {
  const {
    configuration,
    wording,
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
        <ExtraLogo extraLogo={configuration.extraLogo && configuration.extraLogo} />
        <IntroTitle title={configuration.customTitle && wording.title} />
      </header>
      <Small aria-hidden />
      <IntroDescription description={configuration.customDescription && wording.description} />
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
      {configuration
        && (
          <Partners
            partners={configuration.partners}
            configuration={configuration.inPartnershipWith}
          />
        )
      }
    </ProposalCard.ProposalCardCentered>
  );
};

export default IntroCardComponent;
