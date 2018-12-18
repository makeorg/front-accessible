import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { MakeFonts } from 'Assets/vars/Fonts';
import Breakpoints from 'Assets/vars/Breakpoints';


export const MainTitle = styled.h2`
  font-family: ${MakeFonts.CircularBold};
  font-size: ${pxToRem('22px')};
  line-height: ${pxToRem('26px')};
  text-transform: none;
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('38px')};
    line-height: ${pxToRem('50px')};
  }
`;

export const ExtraLogo = styled.img`
  margin: 0 auto ${pxToRem('15px')};
`;

export const IntroTitle = styled(MainTitle)`
  color: ${props => props.theme.color};
`;

export const AltMainTitle = styled(MainTitle)`
  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('28px')};
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('28px')};
    line-height: ${pxToRem('38px')};
    margin-bottom: ${pxToRem('30px')};
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('22px')};
  }
`;
