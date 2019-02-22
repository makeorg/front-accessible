import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const MainTitleStyle = styled.h2`
  font-family: ${MakeFonts.RobotoBold};
  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('26px')};
  text-transform: none;
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('42px')};
    line-height: ${pxToRem('54px')};
  }
`;

export const ExtraLogoStyle = styled.img`
  max-width: ${pxToRem('75px')};
  margin: 0 auto ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.LargeDesktop)}) {
    max-width: 100%;
  }
`;

export const IntroTitleStyle = styled(MainTitleStyle)`
  color: ${props => props.theme.color};
`;

export const AltMainTitleStyle = styled(MainTitleStyle)`
  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('28px')};
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('28px')};
    line-height: ${pxToRem('38px')};
    margin-bottom: ${pxToRem('30px')};
  }
`;

export const SecondaryTitleStyle = styled.h3`
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('22px')};
  }
`;
