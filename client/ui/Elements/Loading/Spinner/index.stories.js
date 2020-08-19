import React from 'react';
import { Spinner } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Spinner',
  component: Spinner,
};

const Default = () => <Spinner />;

export const SpinnerComponent = Default.bind();
SpinnerComponent.parameters = {
  jest: ['Spinner.spec.js'],
};
