// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { A11yFR } from './FR';
import { A11yDE } from './DE';

export const A11y = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);

  switch (language) {
    case 'fr':
      return <A11yFR />;
    case 'de':
      return <A11yDE />;
    default:
      return null;
  }
};
// default export needed for loadable component
export default A11y; // eslint-disable-line import/no-default-export
