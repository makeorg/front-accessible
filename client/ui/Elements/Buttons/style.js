import styled, { keyframes } from 'styled-components';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  TextColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ButtonsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    margin: 20px 0;
  }
`;

export const UnstyledButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const BasicButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 14px;
  line-height: 1;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  padding: 12px 25px 8px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    padding: 13px 25px 10px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;

export const RedButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const GreyButtonStyle = styled(BasicButtonStyle)`
  color: ${TextColors.MediumGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  svg {
    fill: ${MakeThemeColors.Red};
  }
  &:hover,
  &:focus {
    color: ${TextColors.MediumGrey};
  }
`;

export const SmallRedButtonStyle = styled(RedButtonStyle)`
  padding: 5px 15px 2.5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const SmallGreyButtonStyle = styled(GreyButtonStyle)`
  padding: 5px 15px 2.5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const ActiveButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg,
  .tofill {
    fill: ${BasicColors.PureWhite};
  }
  &:disabled {
    color: ${TextColors.MediumGrey};
    background-color: ${BackgroundColors.ExtraLightGrey};
    svg,
    .tofill {
      fill: ${TextColors.MediumGrey};
    }
  }
`;

export const IconWrapperStyle = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 12px;
  margin-right: 5px;
  svg {
    width: 12px;
    height: 12px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const SocialButtonStyle = styled(ActiveButtonStyle)`
  width: 100%;
  margin: 0 5px;
  padding: 5px 15px;
  color: ${BasicColors.PureWhite};
  svg {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

const SocialButtonMargin = `
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 0;
  }
`;

export const FacebookButtonStyle = styled(SocialButtonStyle)`
  background-color: ${IconColors.Facebook};
`;

export const GoogleButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${IconColors.Google};
`;
export const EmailButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${MakeThemeColors.Red};
`;

export const RedLinkButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 5px;
`;

export const ButtonSmallWrapperStyle = styled(ButtonsWrapperStyle)`
  max-width: 410px;
`;

export const CloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${intToPx(DefaultPadding.Mobile)};
  right: ${intToPx(DefaultPadding.Mobile)};
  fill: ${MakeThemeColors.Red};
  z-index: 1;
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: ${intToPx(DefaultPadding.Desktop)};
    right: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NavButtonStyle = styled(UnstyledButtonStyle)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 14px;
  line-height: 20px;
  color: ${MakeThemeColors.Red};
  text-transform: uppercase;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 16px;
  }
`;

export const QualifyButtonStyle = styled.button`
  font-family: ${MakeFonts.CircularStandardBold};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-width: 2px;
  font-size: 11.2px;
  line-height: 20px;
  border-style: solid;
  padding: 0 10px;
  border-radius: 36px;
  border-color: ${props => props.color};
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &.qualified {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 12.6px;
    line-height: 23px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 14px;
    line-height: 26px;
  }
`;

const RotateButton = keyframes`
  0% { transform: rotate(0deg); }
  45% { transform: rotate(-20deg); }
  65% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`;

const InverseRotateButton = keyframes`
  0% { transform: rotate(0deg); }
  45% { transform: rotate(20deg); }
  65% { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
`;

export const VoteButtonStyle = styled.button`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
  padding: 0;
  background-color: ${BasicColors.PureWhite};
  transform: scale(1);
  transition: transform 0.1s ease-in;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &.agree {
    color: ${VoteColors.Agree};
    border-color: ${VoteColors.Agree};
  }
  &.disagree {
    color: ${VoteColors.Disagree};
    border-color: ${VoteColors.Disagree};
  }
  &.neutral {
    color: ${VoteColors.Neutral};
    border-color: ${VoteColors.Neutral};
  }
  &.animated {
    box-shadow: 0 0 0 0 ${props => props.color};
    animation: ${RotateButton} 0.5s 1;
    transform: scale(0.9);
  }
  &.animated.disagree {
    animation: ${InverseRotateButton} 0.5s 1;
  }
  &.agree.voted {
    background-color: ${VoteColors.Agree};
  }
  &.disagree.voted {
    background-color: ${VoteColors.Disagree};
  }
  &.neutral.voted {
    background-color: ${VoteColors.Neutral};
  }
  &.voted {
    color: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    width: 43px;
    height: 43px;
    min-width: 43px;
    min-height: 43px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
`;

export const VoteIconStyle = styled(SvgThumbsUp)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 16px;
  &.agree {
    transform: translate(-50%, -50%);
  }
  &.disagree {
    transform: translate(-50%, -50%) rotate(180deg) scaleX(-1);
  }
  &.neutral {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
  &.agree .tofill {
    fill: ${VoteColors.Agree};
  }
  &.disagree .tofill {
    fill: ${VoteColors.Disagree};
  }
  &.neutral .tofill {
    fill: ${VoteColors.Neutral};
  }
  &.voted .tofill {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    width: 22px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 25px;
  }
`;
