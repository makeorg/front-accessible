/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Src/components/Elements/HiddenElements';
import { MiddleColumnToRow, MiddleRow } from 'Src/components/Elements/FlexElements';
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
        <MiddleColumnToRow>
          <Sequence.FooterTitle
            color={questionConfiguration.theme.footerFontColor}
            id="footer_title"
          >
            <HiddenItem aria-hidden>{i18next.t('footer_sequence.see_more')}</HiddenItem>
            {questionConfiguration.wording.question}
          </Sequence.FooterTitle>
          {questionConfiguration.theme.weEuropeansTheme
            && (
              <MiddleRow>
                <Sequence.InPartnershipWith>
                  {i18next.t('footer_sequence.with')}
                </Sequence.InPartnershipWith>
                <img src="/images/operations/weeuropeans/logo-civico.svg" alt="Civico" />
              </MiddleRow>
            )
          }
        </MiddleColumnToRow>
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
