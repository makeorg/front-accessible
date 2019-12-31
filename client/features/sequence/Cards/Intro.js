// @flow
import React, { useEffect } from 'react';
import { type IntroCardConfig } from 'Shared/types/card';
import {
  trackDisplayIntroCard,
  trackClickStartSequence,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { MiddleRowStyle } from 'Client/ui/Elements/FlexElements';
import { useDispatch } from 'react-redux';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import {
  SequenceTitleWrapperStyle,
  SequenceIntroButtonStyle,
  ExtraLogoStyle,
  SequenceIntroTitleStyle,
  SequenceIntroParagraphStyle,
  SequencePartnerFooterStyle,
  SequencePartnerListStyle,
  SequencePartnerAvatarStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

export const IntroCard = ({ configuration, isCardVisible }: Props) => {
  const dispatch = useDispatch();
  const { extraLogo, description, title, partners } = configuration;
  const descriptionText = description || i18n.t('intro_card.description');
  const handleStartSequence = () => {
    dispatch(incrementSequenceIndex());
    trackClickStartSequence();
  };

  useEffect(() => {
    if (isCardVisible) {
      trackDisplayIntroCard();
    }
  }, [isCardVisible]);

  return (
    <>
      <SequenceTitleWrapperStyle>
        {extraLogo && <ExtraLogoStyle src={extraLogo} alt="" />}
        <SequenceIntroTitleStyle>
          {title ? (
            <>
              <HiddenItemStyle>{i18n.t('sequence.title')}</HiddenItemStyle>
              {title}
            </>
          ) : (
            i18n.t('intro_card.title')
          )}
        </SequenceIntroTitleStyle>
      </SequenceTitleWrapperStyle>
      <SmallSeparatorWithMarginStyle />
      {descriptionText.split('\n').map(text => (
        <SequenceIntroParagraphStyle key={text}>
          {text}
        </SequenceIntroParagraphStyle>
      ))}
      <SequenceIntroButtonStyle
        id="sequence-start-sequence-button"
        onClick={handleStartSequence}
      >
        <IconWrapperStyle aria-hidden>
          <SvgPlayButton />
        </IconWrapperStyle>
        {i18n.t('intro_card.button')}
      </SequenceIntroButtonStyle>
      {partners && (
        <SequencePartnerFooterStyle as="footer">
          {i18n.t('intro_card.partnership')}
          <SequencePartnerListStyle>
            {partners &&
              partners.map(partner => (
                <MiddleRowStyle as="li" key={partner.name}>
                  <SequencePartnerAvatarStyle
                    key={partner.name}
                    src={partner.imageUrl}
                    alt={partner.name}
                  />
                </MiddleRowStyle>
              ))}
          </SequencePartnerListStyle>
        </SequencePartnerFooterStyle>
      )}
    </>
  );
};
