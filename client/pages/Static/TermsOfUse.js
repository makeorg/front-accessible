// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { TermsOfUseFR } from './TermsOfUse-FR';
import { TermsOfUseEN } from './TermsOfUse-EN';

export const TermsOfUse = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);
  return language === 'fr' ? <TermsOfUseFR /> : <TermsOfUseEN />;
};

// default export needed for loadable component
export default TermsOfUse; // eslint-disable-line import/no-default-export
