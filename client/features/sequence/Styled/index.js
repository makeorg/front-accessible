import styled from 'styled-components';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { pxToRem } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ShadowColors,
  TextColors,
  BasicColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  UnstyledButtonStyle,
  RedButtonStyle,
} from 'Client/ui/Elements/ButtonElements';

export const SequenceStyle = styled.section`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  z-index: 0;
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: ${pxToRem(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-height: 550px;
  }
`;

export const BackArrowStyle = styled(UnstyledButtonStyle)`
  max-width: ${pxToRem('85px')};
  margin: ${pxToRem('10px')} auto 0;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: ${pxToRem('20px')};
  z-index: 0;
  font-size: ${pxToRem('45px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    max-width: ${pxToRem('110px')};
    font-size: ${pxToRem('50px')};
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const BackButtonStyle = styled(RedButtonStyle)`
  white-space: normal;
  margin: 0 auto;
`;

export const WrapperStyle = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ListStyle = styled(UnstyledListStyle)`
  flex-grow: 1;
  position: relative;
  width: calc(100% - ${pxToRem('40px')});
  margin: ${pxToRem('35px')} ${pxToRem('20px')} 0;
  transition: transform 0.25s ease-in;
  ${props =>
    props.isSequenceCollapsed
      ? 'transform: scale(0.95)'
      : 'transform: scale(1)'};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('25px')} ${pxToRem('20px')} 0;
  }
`;

export const FooterStyle = styled.footer`
  display: flex;
  flex-grow: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${pxToRem('5px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background-color: ${props => props.theme.color};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding: ${pxToRem('10px')} ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const FooterNavStyle = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterTitleStyle = styled.h2`
  color: ${props => props.color};
  font-size: ${pxToRem('11px')};
  margin-bottom: ${pxToRem('5px')};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('20px')};
  }
`;

export const TitleInnerStyle = styled.span`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const FooterLinkStyle = styled.a`
  color: ${props => props.color};
  font-size: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('14px')};
  }
  &:hover,
  &:focus {
    color: ${props => props.color};
  }
  &:focus {
    outline-color: ${props => props.color};
  }
`;

export const InPartnershipWithStyle = styled.span`
  color: ${TextColors.LightGrey};
  font-family: ${MakeFonts.RobotoRegular};
  text-transform: none;
  font-size: ${pxToRem('10px')};
  padding: 0 0 0 ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('14px')};
  }
`;
