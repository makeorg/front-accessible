import styled from 'styled-components';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ShadowColors,
  BasicColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import {
  UnstyledButtonStyle,
  RedButtonStyle,
} from 'Client/ui/Elements/ButtonElements';

export const SequenceStyle = styled.section`
  display: flex;
  flex-flow: column;
  flex: 1;
  z-index: 0;
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  overflow: hidden;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-height: 550px;
    margin-top: 25px;
  }
`;

export const BackArrowStyle = styled(UnstyledButtonStyle)`
  max-width: 85px;
  margin-top: 10px;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: 20px;
  z-index: 0;
  font-size: 35px;
  svg {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 110px;
    font-size: 50px;
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const BackButtonStyle = styled(RedButtonStyle)`
  white-space: normal;
  margin: 0 auto;
`;

export const WrapperStyle = styled.div`
  display: flex;
  flex: 1;
`;

export const ListStyle = styled(UnstyledListStyle)`
  flex: 1;
  position: relative;
  width: 100%;
  margin-top: 35px;
  transition: transform 0.25s ease-in;
  ${props =>
    props.isSequenceCollapsed
      ? 'transform: scale(0.95)'
      : 'transform: scale(1)'};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 25px;
  }
`;

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background-color: ${props => props.theme.color};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const FooterTitleStyle = styled.h2`
  color: ${props => props.color};
  font-size: 11px;
  margin-bottom: 5px;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 20px;
  }
`;

export const FooterLinkStyle = styled.a`
  color: ${props => props.color};
  font-size: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
  &:hover,
  &:focus {
    color: ${props => props.color};
  }
  &:focus {
    outline-color: ${props => props.color};
  }
`;
