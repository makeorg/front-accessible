/* @flow */

import styled from 'styled-components';
import { pxToRem } from '../../helpers/styled';
import { TextColors } from '../../assets/vars/Colors';

export const Description = styled.p`
  font-size: ${pxToRem('16px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
`;

export const AltDescription = styled(Description)`
  font-size: ${pxToRem('14px')};
`;

export const DescriptionLink = styled.a`
  cursor: pointer;
`;
