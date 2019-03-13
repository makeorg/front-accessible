/* @flow */

import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ParagraphStyle = styled.p`
  font-size: 12px;
  line-height: normal;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 14px;
  }
`;

export const CenterParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
`;
