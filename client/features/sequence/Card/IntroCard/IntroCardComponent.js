// @flow
import * as React from 'react';
import { type IntroCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { ExtraLogo } from './ExtraLogo';
import { IntroTitle } from './Title';
import { IntroDescription } from './Description';
import { Partners } from './Partners';
import { ProposalCardCenteredStyle } from '../Styled';
import { IntroButtonStyle } from '../Styled/Buttons';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
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
    isCardCollapsed,
    isCardVisible,
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
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      aria-hidden={!isCardVisible}
    >
      <header>
        <ExtraLogo extraLogo={configuration.extraLogo} />
        <IntroTitle title={configuration.title} />
      </header>
      <SmallSeparatorWithMarginStyle aria-hidden />
      <IntroDescription description={configuration.description} />
      <IntroButtonStyle
        id="sequence-start-sequence-button"
        onClick={handleStartSequence}
      >
        <IconWrapperStyle aria-hidden>
          <SvgPlayButton />
        </IconWrapperStyle>
        {i18n.t('intro_card.button')}
      </IntroButtonStyle>
      <Partners partners={configuration.partners} />
    </ProposalCardCenteredStyle>
  );
};
