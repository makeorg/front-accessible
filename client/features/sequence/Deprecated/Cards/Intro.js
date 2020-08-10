// @flow
import React, { useEffect } from 'react';
import { type IntroCardConfigType } from 'Shared/types/card';
import {
  trackDisplayIntroCard,
  trackClickStartSequence,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { MiddleRowStyle } from 'Client/ui/Elements/FlexElements';
import { useDispatch } from 'react-redux';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { PlayIconStyle } from 'Client/ui/Elements/Buttons/style';
import {
  SequenceTitleWrapperStyle,
  SequenceIntroButtonStyle,
  ExtraLogoStyle,
  SequenceMainTitleStyle,
  SequenceIntroParagraphStyle,
  SequencePartnerFooterStyle,
  SequencePartnerListStyle,
  SequencePartnerAvatarStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfigType,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

export const DeprecatedIntroCard = ({
  configuration,
  isCardVisible,
}: Props) => {
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
        <SequenceMainTitleStyle data-cy-container="intro-card-title">
          {title ? (
            <>
              <HiddenItemStyle>{i18n.t('sequence.title')}</HiddenItemStyle>
              {title}
            </>
          ) : (
            i18n.t('intro_card.title')
          )}
        </SequenceMainTitleStyle>
      </SequenceTitleWrapperStyle>
      <SmallSeparatorWithMarginStyle />
      {descriptionText.split('\n').map((text, index) => (
        <SequenceIntroParagraphStyle
          key={text}
          data-cy-container={`intro-card-text-${index}`}
        >
          {text}
        </SequenceIntroParagraphStyle>
      ))}
      <SequenceIntroButtonStyle
        id="sequence-start-sequence-button"
        data-cy-button="start-sequence"
        onClick={handleStartSequence}
      >
        <PlayIconStyle aria-hidden />
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
                    src={partner.imageUrl}
                    alt={partner.name}
                    key={partner.name}
                  />
                </MiddleRowStyle>
              ))}
          </SequencePartnerListStyle>
        </SequencePartnerFooterStyle>
      )}
    </>
  );
};
