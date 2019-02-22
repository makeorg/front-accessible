/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  FooterStyle,
  FooterNavStyle,
  FooterTitleStyle,
  TitleInnerStyle,
  InPartnershipWithStyle,
  FooterLinkStyle,
} from '../Styled';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object,
  /** Method called to track Footer */
  handleTracking: Function,
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { questionConfiguration, handleTracking } = props;

  return (
    <FooterStyle>
      <FooterNavStyle aria-labelledby="footer_title">
        <MiddleColumnStyle>
          <FooterTitleStyle
            color={questionConfiguration.theme.footerFontColor}
            id="footer_title"
          >
            <HiddenItemStyle aria-hidden>
              {i18n.t('footer_sequence.see_more')}
            </HiddenItemStyle>
            <TitleInnerStyle>
              {questionConfiguration.wording.question}
              {questionConfiguration.footer &&
                questionConfiguration.footer.sentence && (
                  <InPartnershipWithStyle>
                    {questionConfiguration.footer.sentence}
                  </InPartnershipWithStyle>
                )}
            </TitleInnerStyle>
          </FooterTitleStyle>
        </MiddleColumnStyle>
        <FooterLinkStyle
          color={questionConfiguration.theme.footerFontColor}
          target="_blank"
          href={questionConfiguration.consultationUrl}
          onClick={handleTracking}
        >
          {i18n.t('footer_sequence.link')}
        </FooterLinkStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
