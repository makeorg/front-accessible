// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { FooterFR } from './FR';
import { FooterINT } from './INT';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFR = country === 'FR';

  if (!country) {
    return null;
  }

  if (isFR) {
    return <FooterFR />;
  }

  return <FooterINT />;
};
