/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import Sequence from '../Styled';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object,
  /** Method called to track Footer */
  handleTracking: Function
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { questionConfiguration, handleTracking } = props;

  return (
    <Sequence.Footer>
      <Sequence.FooterNav aria-labelledby="footer_title">
        <MiddleColumnStyle>
          <Sequence.FooterTitle
            color={questionConfiguration.theme.footerFontColor}
            id="footer_title"
          >
            <HiddenItemStyle aria-hidden>{i18next.t('footer_sequence.see_more')}</HiddenItemStyle>
            <Sequence.TitleInner>
              {questionConfiguration.wording.question}
              {questionConfiguration.footer
                && questionConfiguration.footer.sentence
                && (
                  <Sequence.InPartnershipWith>
                    {questionConfiguration.footer.sentence}
                  </Sequence.InPartnershipWith>
                )
              }
            </Sequence.TitleInner>
          </Sequence.FooterTitle>
        </MiddleColumnStyle>
        <Sequence.FooterLink
          color={questionConfiguration.theme.footerFontColor}
          target="_blank"
          href={questionConfiguration.consultationUrl}
          onClick={handleTracking}
        >
          {i18next.t('footer_sequence.link')}
        </Sequence.FooterLink>
      </Sequence.FooterNav>
    </Sequence.Footer>
  );
};
