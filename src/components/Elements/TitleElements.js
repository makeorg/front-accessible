import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../assets/vars/Breakpoints';

export const SecondLevelTitle = styled.h2`
  font-size: ${rem('18px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('22px')};
  }
`;

export const ThirdLevelTtitle = styled.h3`
  font-size: ${rem('16px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
  }
`;
