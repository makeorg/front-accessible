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
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export const GreatCausesListItemStyle = styled.li`
  margin-right: 15px;
  margin-bottom: 15px;
  flex: 0 1 calc(50% - 15px);
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex: 0 1 calc(25% - 15px);
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
  font-weight: bold;
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
