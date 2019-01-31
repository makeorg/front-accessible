import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const Proposal = styled.blockquote`
  max-width: 100%;
  font-size: ${pxToRem('16px')};
  line-height: ${pxToRem('22px')};
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('22px')};
    line-height: ${pxToRem('30px')};
  }
`;
