// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { TermsOfUseFR } from './FR';
import { TermsOfUseEN } from './EN';
import { TermsOfUseDE } from './DE';

export const TermsOfUse = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);

  switch (language) {
    case 'fr':
      return <TermsOfUseFR />;
    case 'de':
      return <TermsOfUseDE />;
    default:
      return <TermsOfUseEN />;
  }
};

// default export needed for loadable component
export default TermsOfUse; // eslint-disable-line import/no-default-export
