/* @flow */
import React from 'react';

import * as elements from './elements';

type KeysFile = $Keys<typeof elements>;
type Props = {
  type: KeysFile,
};

export const Svg = (props: Props) => {
  const { type } = props;
  const IconType = elements[type]; // eslint-disable-line import/namespace
  return IconType ? <IconType {...props} /> : null;
};
