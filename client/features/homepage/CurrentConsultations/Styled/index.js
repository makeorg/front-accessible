import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  BackgroundColors,
  MakeThemeColors,
  BasicColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const CurrentConsultationsStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export const CurrentConsultationItemStyle = styled.li`
  margin-right: 15px;
  margin-bottom: 15px;
  flex: 0 1 calc(50% - 7.5px);
  &:nth-child(2),
  &:last-child {
    margin: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex: 1;
    &:nth-child(2) {
      margin-right: 30px;
    }
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CurrentConsultationArticleStyle = styled.article`
  display: block;
  position: relative;
  width: 100%;
  background-color: ${BackgroundColors.LightGrey};
  border-radius: 8px;
  overflow: hidden;
  &:hover > .overlay {
    transform: translateY(0);
  }
`;

export const CurrentConsultationTriggerStyle = styled.input`
  display: block;
  width: 100%;
`;

export const CurrentConsultationLinkOverlayStyle = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${MakeThemeColors.Red};
  padding: 5px;
  transform: translateY(125%);
  transition: transform 0.5s ease-in;
  border-radius: 8px;
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
