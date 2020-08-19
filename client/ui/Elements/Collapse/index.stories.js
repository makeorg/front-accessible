import React from 'react';
import { Collapse } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Collapse',
  component: Collapse,
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
export const CollapseComponent = args => <Collapse {...args} />;

CollapseComponent.args = {
  title: 'Collapse Tile',
  children: 'Collapse child',
  open: false,
  withTileStyle: false,
  noMargin: false,
};

CollapseComponent.parameters = {
  jest: ['Collapse.spec.js'],
};
