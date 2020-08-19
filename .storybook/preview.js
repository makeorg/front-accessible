import React from 'react';
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { ModernNormalizeStylesheet } from '../client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from '../client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from '../client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from '../client/app/assets/css-in-js/UITheme';
import results from '../test/.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);


export const decorators = [
  (Story) => (
    <>
      <ModernNormalizeStylesheet />
      <FontFacesStylesheet />
      <DefaultStylesheet />
      <UIThemeStylesheet />
      <Story />
    </>
  ),
];
