import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { TextColors } from 'Src/assets/vars/Colors';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';
import { MakeFonts } from 'Src/assets/vars/Fonts';

export const AuthorInfos = styled.cite`
  font-size: ${pxToRem('14px')};
  color: ${TextColors.MediumGrey};
  font-style: normal;
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
  }
`;

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
