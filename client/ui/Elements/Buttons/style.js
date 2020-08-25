import styled, { keyframes } from 'styled-components';
import {
  SvgThumbsUp,
  SvgEnvelope,
  SvgFacebookLogoF,
  SvgPencil,
  SvgGoogleLogoG,
  SvgClapping,
  SvgSignOut,
  SvgAngleArrowLeft,
  SvgPlayButton,
  SvgStepForward,
  SvgLock,
  SvgUser,
  SvgChild,
  SvgMapMarker,
  SvgSuitcase,
  SvgPaperPlane,
  SvgSaveFileOption,
  SvgLink,
} from 'Client/ui/Svg/elements';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
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

export const WhiteButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureBlack};
  background-color: ${BasicColors.PureWhite};
  svg {
    fill: ${BasicColors.PureBlack};
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

export const RedLinkButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 5px;
`;

export const CloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${intToPx(DefaultPadding.Mobile)};
  right: ${intToPx(DefaultPadding.Mobile)};
  fill: ${MakeThemeColors.Red};
  z-index: 1;
  font-size: 16px;
  .tofill {
    fill: ${TextColors.AltMediumgrey};
  }
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
  &.neutral,
  &.other {
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
  &.neutral.voted,
  &.other.voted {
    background-color: ${VoteColors.Neutral};
  }
  &.agree .tofill {
    fill: ${VoteColors.Agree};
  }
  &.disagree .tofill {
    fill: ${VoteColors.Disagree};
  }
  &.neutral .tofill,
  &.other .tofill {
    fill: ${VoteColors.Neutral};
  }
  &.voted {
    color: ${BasicColors.PureWhite};
  }
  &.voted .tofill {
    fill: ${BasicColors.PureWhite};
  }
  &.voted:hover,
  &.voted:focus {
    transform: scale(1);
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
  &.neutral,
  &.other {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    width: 22px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 25px;
  }
`;

/**
 * Icons in buttons
 */

const ButtonIconStyle = `
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  margin-right: 5px;
  width: 14px;
  height: 14px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 16px;
    height: 16px;
  }
`;

export const ProposalIconStyle = styled(SvgPencil)`
  ${ButtonIconStyle};
  &.closed {
    margin: 0;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      margin-right: 5px;
    }
  }
`;

export const EmailIconStyle = styled(SvgEnvelope)`
  ${ButtonIconStyle}
`;

export const FacebookIconStyle = styled(SvgFacebookLogoF)`
  ${ButtonIconStyle}
`;

export const FacebookPlainIconStyle = styled(SvgFacebookLogoF)`
  ${ButtonIconStyle}
`;

export const GoogleIconStyle = styled(SvgGoogleLogoG)`
  ${ButtonIconStyle}
`;

export const ClappingIconStyle = styled(SvgClapping)`
  ${ButtonIconStyle}
`;

export const SignOutIconStyle = styled(SvgSignOut)`
  ${ButtonIconStyle}
`;

export const PencilIconStyle = styled(SvgPencil)`
  ${ButtonIconStyle}
`;

export const AngleArrowLeftIconStyle = styled(SvgAngleArrowLeft)`
  ${ButtonIconStyle}
`;

export const ThumbsUpIconStyle = styled(SvgThumbsUp)`
  ${ButtonIconStyle}
`;

export const PlayIconStyle = styled(SvgPlayButton)`
  ${ButtonIconStyle}
`;

export const ForwardIconStyle = styled(SvgStepForward)`
  ${ButtonIconStyle}
`;

export const LockIconStyle = styled(SvgLock)`
  ${ButtonIconStyle}
`;

export const UserIconStyle = styled(SvgUser)`
  ${ButtonIconStyle}
`;

export const ChildIconStyle = styled(SvgChild)`
  ${ButtonIconStyle}
`;

export const MapMarkerIconStyle = styled(SvgMapMarker)`
  ${ButtonIconStyle}
`;

export const SuitcaseIconStyle = styled(SvgSuitcase)`
  ${ButtonIconStyle}
`;

export const PaperPlaneIconStyle = styled(SvgPaperPlane)`
  ${ButtonIconStyle}
`;

export const SaveFileIconStyle = styled(SvgSaveFileOption)`
  ${ButtonIconStyle}
`;

export const LinkIconStyle = styled(SvgLink)`
  ${ButtonIconStyle}
`;
