// @flow
import * as React from 'react';
import ProposalCard from '../../Styled';

type Props = {
  /** String with extraLogo image path */
  extraLogo: boolean | string
}

/**
 * Renders Intro ExtraLogo component
 */
const ExtraLogo = (props: Props) => {
  const {
    extraLogo
  } = props;

  if (!extraLogo) {
    return null;
  }

  return (
    <ProposalCard.ExtraLogo
      src={extraLogo}
      alt=""
    />
  );
};

export default ExtraLogo;
