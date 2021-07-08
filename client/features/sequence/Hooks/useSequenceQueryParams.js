// @flow
import { useLocation } from 'react-router';

const getParams = search => {
  const params = new URLSearchParams(search);
  return {
    firstProposalParam: params.get('firstProposal'),
    introCardParam: params.get('introCard')?.toLowerCase() !== 'false',
    pushProposalParam: params.get('pushProposal')?.toLowerCase() !== 'false',
  };
};

export const useSequenceQueryParams = () => {
  const { search } = useLocation();

  return getParams(search);
};
