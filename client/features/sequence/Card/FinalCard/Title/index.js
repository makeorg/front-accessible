// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { AltMainTitleStyle } from '../../Styled/Titles';

type Props = {
  title?: string,
};

/**
 * Renders finalCard Title component
 */
export const FinalTitle = (props: Props) => {
  const { title } = props;

  return (
    <AltMainTitleStyle>{title || i18n.t('final_card.title')}</AltMainTitleStyle>
  );
};
