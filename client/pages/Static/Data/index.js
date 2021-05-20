// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { DataFR } from './FR';
import { DataEN } from './EN';
import { DataDE } from './DE';

export const Data = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);

  switch (language) {
    case 'fr':
      return <DataFR />;
    case 'de':
      return <DataDE />;
    default:
      return <DataEN />;
  }
};
// default export needed for loadable component
export default Data; // eslint-disable-line import/no-default-export
