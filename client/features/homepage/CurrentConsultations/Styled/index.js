import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  MakeThemeColors,
  BasicColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Elements } from 'Client/app/assets/vars/Elements';

export const CurrentConsultationContainerStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: ${intToPx(DefaultPadding.Desktop)} 0;
`;

export const CurrentConsultationArrowsStyle = styled(UnstyledButtonStyle)`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${TextColors.MediumGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  font-size: 15px;
  margin-right: 15px;
  svg {
    fill: ${TextColors.MediumGrey};
  }
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    background-color: ${BasicColors.PureBlack};
    svg {
      fill: ${BasicColors.PureWhite};
    }
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    margin: 0 0 0 15px;
  }
`;

export const CurrentConsultationArticleStyle = styled.article`
  display: block;
  position: relative;
  background-color: ${BackgroundColors.LightGrey};
  border-radius: ${intToPx(Elements.BorderRadius)};
  overflow: hidden;
  &:hover > .overlay {
    transform: translateY(0);
  }
`;

export const CurrentConsultationTriggerStyle = styled.input`
  display: block;
  width: 100%;
`;

export const ProposalsCountWrapperStyle = styled.div`
  width: 100%;
  background-color: #ffd978;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 1;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
`;

export const ProposalsNumber = styled.span`
  font-family: ${MakeFonts.RobotoBold};
`;

export const CurrentConsultationLinkOverlayStyle = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${MakeThemeColors.Red};
  padding: 5px;
  transform: translateY(125%);
  transition: transform 0.5s ease-in;
  border-radius: ${intToPx(Elements.BorderRadius)};
  text-decoration: none;
  &[aria-hidden='false'] {
    transform: translateY(0);
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 15px;
  }
`;

export const CurrentConsultationDescriptionStyle = styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
  color: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const CurrentConsultationTextStyle = styled.p`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  text-decoration: underline;
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
