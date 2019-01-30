/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Client/ui/Elements/HiddenElements';
import { MiddleColumn } from 'Client/ui/Elements/FlexElements';
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
        <MiddleColumn>
          <Sequence.FooterTitle
            color={questionConfiguration.theme.footerFontColor}
            id="footer_title"
          >
            <HiddenItem aria-hidden>{i18next.t('footer_sequence.see_more')}</HiddenItem>
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
        </MiddleColumn>
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
