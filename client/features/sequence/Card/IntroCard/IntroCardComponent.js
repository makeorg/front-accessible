// @flow
import * as React from 'react';
import type { IntroCardConfig, IntroCardWording } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Small } from 'Client/ui/Elements/Separators';
import { ExtraLogo } from './ExtraLogo';
import { IntroTitle } from './Title';
import { IntroDescription } from './Description';
import { Partners } from './Partners';
import { ProposalCardCenteredStyle } from '../Styled';
import { IntroButtonStyle } from '../Styled/Buttons';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Object with Static properties used to customise the wording of the Intro Card */
  wording: IntroCardWording,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when button is clicked */
  handleStartSequence: () => void,
};

/**
 * Renders Intro Card
 */
export const IntroCardComponent = (props: Props) => {
  const {
    configuration,
    wording,
    index,
    currentIndex,
    tabIndex,
    handleStartSequence,
    position,
    scale,
    zindex,
  } = props;

  return (
    <ProposalCardCenteredStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
    >
      <header>
        <ExtraLogo
          extraLogo={configuration.extraLogo && configuration.extraLogo}
        />
        <IntroTitle title={configuration.customTitle && wording.title} />
      </header>
      <Small aria-hidden />
      {configuration.customDescription ? (
        <IntroDescription description={wording.description} />
      ) : (
        <IntroDescription />
      )}
      <IntroButtonStyle
        id="sequence-start-sequence-button"
        tabIndex={tabIndex}
        onClick={handleStartSequence}
      >
        <IconInButtonStyle>
          <FontAwesomeIcon aria-hidden icon={faPlay} />
        </IconInButtonStyle>
        {i18n.t('intro_card.button')}
      </IntroButtonStyle>
      {configuration && (
        <Partners
          partners={configuration.partners}
          configuration={configuration.inPartnershipWith}
        />
      )}
    </ProposalCardCenteredStyle>
  );
};
