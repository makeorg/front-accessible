import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';
import {
  ShadowColors,
  BasicColors,
  BorderColors,
  TextColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle } from '../ButtonElements';

export const SelectPanelWrapperStyle = styled.div`
  position: relative;
  width: 100%;
  border-left: 1px solid ${BorderColors.LightGrey};
  &:first-child {
    border-left: none;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-left: none;
    width: auto;
  }
`;

export const SelectButtonStyle = styled(UnstyledButtonStyle)`
  font-size: 14px;
  background-color: ${props =>
    props.isHighlighted ? MakeThemeColors.Red : BasicColors.PureWhite};
  color: ${props =>
    props.isHighlighted ? BasicColors.PureWhite : TextColors.MediumGrey};
  font-family: ${props =>
    props.isHighlighted
      ? MakeFonts.CircularStandardBold
      : MakeFonts.CircularStandardBook};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  svg {
    fill: ${props => (props.isHighlighted ? BasicColors.PureWhite : 'inherit')};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 190px;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1px solid
      ${props =>
        props.isHighlighted ? BasicColors.PureWhite : BorderColors.LightGrey};
  }
`;

export const PanelStyle = styled.div`
  display: none;
  visibility: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 99;
  &.open {
    display: block;
    visibility: visible;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    position: absolute;
    top: 53px;
    width: ${intToPx(Elements.DropdownsContainerWidth)};
    border-radius: ${intToPx(Elements.BorderRadius)};
    box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
    z-index: 1;
  }
`;

export const ArrowStyle = styled.span`
  margin-left: 0;
  padding-top: 3px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 20px;
  }
`;
