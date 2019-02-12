// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { AltMainTitleStyle } from '../../Styled/Titles';

type Props = {
  title: boolean | string
}

/**
 * Renders Sign Up Title
 */
export const SignUpTitle = (props: Props) => {
  const {
    title
  } = props;

  return (
    <AltMainTitleStyle>
      {title || i18n.t('sign_up_card.title')}
    </AltMainTitleStyle>
  );
};
