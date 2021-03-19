import React from 'react';
import { DeprecatedCollapse } from './DeprecatedCollapse';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Collapse',
  component: DeprecatedCollapse,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
    withTileStyle: {
      control: {
        type: 'boolean',
      },
    },
    noMargin: {
      control: {
        type: 'boolean',
      },
    },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const CollapseComponent = args => <DeprecatedCollapse {...args} />;

CollapseComponent.args = {
  title: 'Collapse Tile',
  children: 'Collapse child',
  open: false,
  withTileStyle: false,
  noMargin: false,
};

CollapseComponent.parameters = {
  jest: ['DeprecatedCollapse.spec.js'],
};
