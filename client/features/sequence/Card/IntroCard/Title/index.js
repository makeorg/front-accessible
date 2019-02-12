// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { IntroTitleStyle } from '../../Styled/Titles';

type Props = {
  title: boolean | string
}

/**
 * Renders Intro Title component
 */
export const IntroTitle = (props: Props) => {
  const {
    title
  } = props;

  return (
    <IntroTitleStyle>
      {title || i18n.t('intro_card.title')}
    </IntroTitleStyle>
  );
};
