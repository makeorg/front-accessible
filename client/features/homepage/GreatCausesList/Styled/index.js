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

export const GreatCausesListStyle = styled(UnstyledListStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    display: flex;
    flex-flow: row;
    align-content: space-between;
  }
`;

export const GreatCausesListItemStyle = styled.li`
  display: inline-flex;
  width: 100%;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: calc(50% - 5px);
    margin-bottom: 15px;
    &:nth-child(2n + 1) {
      margin-right: 5px;
    }
    &:nth-child(2n) {
      margin-left: 5px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 100%;
    margin: 0 15px;
    &:nth-child(2n + 1) {
      margin-right: 15px;
    }
    &:nth-child(2n) {
      margin-left: 15px;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const GreatCausesArticleStyle = styled.article`
  display: block;
  position: relative;
  width: 100%;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 8px;
  overflow: hidden;
  &:hover > .overlay {
    transform: translateY(0);
  }
`;

export const GreatCauseTriggerStyle = styled.input`
  display: block;
  width: 100%;
`;

export const GreatCausesOverlayStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${MakeThemeColors.Red};
  opacity: 0.9;
  padding: 5px;
  transform: translateY(125%);
  transition: transform 0.5s ease-in;
  border-radius: 8px;
  &[aria-hidden='false'] {
    transform: translateY(0);
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 15px;
  }
`;

export const GreatCausesDescriptionStyle = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const GreatCausesLinkStyle = styled.a`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  text-decoration: underline;
  margin-top: 10px;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
