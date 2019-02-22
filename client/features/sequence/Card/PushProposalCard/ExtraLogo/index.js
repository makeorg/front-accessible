// @flow
import * as React from 'react';
import { ExtraLogoStyle } from '../../Styled/Titles';

type Props = {
  /** String with extraLogo image path */
  extraLogo: string,
};

/**
 * Renders Push Proposal ExtraLogo component
 */
export const ExtraLogo = (props: Props) => {
  const { extraLogo } = props;

  if (!extraLogo) {
    return null;
  }

  return <ExtraLogoStyle src={extraLogo} alt="" />;
};
