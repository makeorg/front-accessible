import styled from 'styled-components';
import {
  BasicColors,
  BackgroundColors,
  TextColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledButtonStyle } from '../Buttons/style';
import { UnstyledListStyle } from '../ListElements';

export const SortedListStyle = styled(UnstyledListStyle)`
  background-color: ${BackgroundColors.ExtraLightGrey};
  padding: 15px;
  overflow: auto;
  width: 100%;
  height: ${intToPx(Elements.DropdownsContainerHeight)};
`;

export const SortedListElementStyle = styled.li`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  margin-bottom: 7px;
  color: ${TextColors.MediumGrey};
  background-color: ${BasicColors.PureWhite};
  border-radius: 3px;
  padding: 7px 15px;
  font-size: 12px;
  &.selected {
    font-family: ${MakeFonts.CircularStandardBold};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const SortedButtonStyle = styled(UnstyledButtonStyle)`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  margin-bottom: 7px;
  color: ${TextColors.MediumGrey};
  background-color: ${BasicColors.PureWhite};
  border-radius: 3px;
  padding: 7px 15px;
  font-size: 12px;
  &.selected {
    font-family: ${MakeFonts.CircularStandardBold};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const SortedRadioStyle = styled.span`
  position: relative;
  z-index: 0;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid ${BackgroundColors.MediumGrey};
  margin-right: 15px;
`;

export const CheckedStyle = {
  position: 'absolute',
  bottom: 0,
  left: '1px',
  fontSize: '15px',
  fill: MakeThemeColors.Red,
};
