/* @flow */

import styled from 'styled-components';

export const HiddenItem = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;
