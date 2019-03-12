// @flow
import * as React from 'react';
import { type IntroCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { Svg } from 'Client/ui/Svg';
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
        <ExtraLogo extraLogo={configuration.extraLogo} />
        <IntroTitle title={configuration.title} />
      </header>
      <Small aria-hidden />
      <IntroDescription description={configuration.description} />
      <IntroButtonStyle
        id="sequence-start-sequence-button"
        tabIndex={tabIndex}
        onClick={handleStartSequence}
      >
        <IconInButtonStyle aria-hidden>
          <Svg type="SvgPlayButton" />
        </IconInButtonStyle>
        {i18n.t('intro_card.button')}
      </IntroButtonStyle>
      <Partners partners={configuration.partners} />
    </ProposalCardCenteredStyle>
  );
};
