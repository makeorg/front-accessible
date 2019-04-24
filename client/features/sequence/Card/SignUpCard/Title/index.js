// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { SignUpTitleStyle } from '../../Styled/Titles';

type Props = {
  title?: string,
};

/**
 * Renders Sign Up Title
 */
export const SignUpTitle = (props: Props) => {
  const { title } = props;

  return (
    <SignUpTitleStyle>{title || i18n.t('sign_up_card.title')}</SignUpTitleStyle>
  );
};
