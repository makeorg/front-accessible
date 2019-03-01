/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ParagraphStyle = styled.p`
  font-size: ${pxToRem('12px')};
  line-height: normal;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('14')};
  }
`;

export const CenterParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
`;
