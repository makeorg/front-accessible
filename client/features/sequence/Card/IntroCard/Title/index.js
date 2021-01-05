// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { IntroTitleStyle } from '../../Styled/Titles';

type Props = {
  title?: string,
};

/**
 * Renders Intro Title component
 */
export const IntroTitle = (props: Props) => {
  const { title } = props;

  return (
    <IntroTitleStyle>
      {title ? (
        <React.Fragment>
          <HiddenItemStyle>{i18n.t('sequence.title')}</HiddenItemStyle>
          {title}
        </React.Fragment>
      ) : (
        i18n.t('intro_card.title')
      )}
    </IntroTitleStyle>
  );
};