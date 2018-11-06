import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { BasicColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${BasicColors.PureWhite};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('24px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('32px')};
  }
`;

export const Link = styled.a`
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
  &:focus {
    outline-color: ${BasicColors.PureBlack};
  }
`;
