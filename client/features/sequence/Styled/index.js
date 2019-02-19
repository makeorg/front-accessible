import styled from 'styled-components';
import { Breakpoints, Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { pxToRem } from 'Shared/helpers/styled';
import { PROPOSALSTACK_HEIGHT_MOBILE, PROPOSALSTACK_HEIGHT_DESKTOP } from 'Client/app/constants/elements';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ShadowColors,
  TextColors,
  BasicColors,
  BackgroundColors
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle, RedButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const SequenceStyle = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: calc(100% - ${pxToRem(PROPOSALSTACK_HEIGHT_MOBILE)});
  max-width: ${pxToRem(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  ${props => (props.isSequenceCollapsed ? 'transform: translateY(90%)' : 'transform: translateY(0)')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem(PROPOSALSTACK_HEIGHT_DESKTOP)});
  }
`;


export const BackArrowStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: ${pxToRem('20px')};
  top: ${pxToRem('-65px')};
  left: 50%;
  z-index: 0;
  transform: translate(-50%, 0);
  font-size: ${pxToRem('45px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    top: ${pxToRem('-85px')};
    font-size: ${pxToRem('50px')};
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const BackButtonStyle = styled(RedButtonStyle)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
  min-width: ${pxToRem('210px')};
`;

export const WrapperStyle = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const ListStyle = styled(UnstyledListStyle)`
  margin: ${pxToRem('30px')} ${pxToRem('20px')} 0;
  width: calc(100% - ${pxToRem('40px')});
  height: calc(100% - ${pxToRem('30px')});
  transition: transform 0.25s ease-in;
  ${props => (props.isSequenceCollapsed ? 'transform: scale(0.95)' : 'transform: scale(1)')};
`;


export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: ${pxToRem(Elements.SequenceFooterHeightMobile)};
  padding: ${pxToRem('5px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background-color: ${props => props.theme.color};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem(Elements.SequenceFooterHeightDesktop)};
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
  font-size: ${pxToRem('13px')};
  margin-bottom: ${pxToRem('5px')};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('20px')};
  }
`;

export const TitleInnerStyle = styled.span`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const FooterLinkStyle = styled.a`
  color: ${props => props.color};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
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
  font-size: ${pxToRem('12px')};
  padding: 0 0 0 ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;
