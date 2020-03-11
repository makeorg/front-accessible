// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { DataFR } from './Data-FR';
import { DataEN } from './Data-EN';

export const Data = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);
  return language === 'fr' ? <DataFR /> : <DataEN />;
};
// default export needed for loadable component
export default Data; // eslint-disable-line import/no-default-export
