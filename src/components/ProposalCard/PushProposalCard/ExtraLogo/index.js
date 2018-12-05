import * as React from 'react';
import ProposalCard from '../../Styled';

const ExtraLogo = ({ extraLogo }) => {
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
