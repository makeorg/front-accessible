import styled from 'styled-components';
import { pxToRem } from '../../helpers/styled';
import Breakpoints from '../../assets/vars/Breakpoints';

export const SecondLevelTitle = styled.h2`
  font-size: ${pxToRem('18px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('22px')};
  }
`;

export const ThirdLevelTtitle = styled.h3`
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
  }
`;

export const FourthLevelTtitle = styled.h4`
  font-size: ${pxToRem('14px')};
  margin-bottom: ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('16px')};
  }
`;
