import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  MakeThemeColors,
  BasicColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const CurrentConsultationContainerStyle = styled.section`
  width: 100%;
  margin: 30px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: ${intToPx(Layouts.SpecialContainerWidth)};
    padding: 0 20px;
  }
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

export const CurrentConsultationListStyle = styled(UnstyledListStyle)`
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const CurrentConsultationItemStyle = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CurrentConsultationArticleStyle = styled.article`
  display: block;
  position: relative;
  background-color: ${BackgroundColors.LightGrey};
  border-radius: ${intToPx(Elements.BorderRadius)};
  overflow: hidden;
  padding: 0 0 10px;
  &:hover > .overlay {
    transform: translateY(0);
  }
`;

export const CurrentConsultationTriggerStyle = styled.input`
  display: block;
  width: 100%;
`;

export const CurrentConsultationLabelStyle = styled(ConsultationLabelStyle)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 3px 10px 1px;
  font-size: 12px;
  line-height: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 6px 12px 4px;
    font-size: 14px;
    line-height: 18px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 16px;
    line-height: 18px;
    padding: 8px 18px 5px;
  }
`;

export const ProposalsCountWrapperStyle = styled(ParagraphStyle)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  background-color: #ffd978;
  color: ${BasicColors.PureBlack};
  text-align: center;
  padding: 5px 0;
`;

export const ProposalsNumber = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
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
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 12px;
  line-height: 1.5;
  color: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const CurrentConsultationTextStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  text-decoration: underline;
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
