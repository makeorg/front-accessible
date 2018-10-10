import styled from 'styled-components';
import { rem } from 'polished';
import Fonts from '../../../assets/vars/Fonts';
import { Colors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${Colors.PureWhite};
  font-size: ${rem('14px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
  }
`;

export const HighlightedTitle = styled.span`
  font-family: ${Fonts.Ultra};
  font-size: ${rem('18px')};
  text-transform: none;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('25px')};
  }
`;

export const Link = styled.a`
  font-size: ${rem('12px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('14px')};
  }
`;
