/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
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
        <Sequence.FooterTitle
          color={questionConfiguration.theme.footerFontColor}
          id="footer_title"
        >
          <HiddenItem aria-hidden>{i18next.t('footer_sequence.see_more')}</HiddenItem>
          {questionConfiguration.wording.question}
        </Sequence.FooterTitle>
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
