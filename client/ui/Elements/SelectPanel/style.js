import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle } from '../Buttons/style';

export const SelectPanelWrapperStyle = styled.div`
  position: relative;
  width: 100%;
  border-left: 1px solid ${color.greyLighter};
  &:first-child {
    border-left: none;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-left: none;
    width: auto;
  }
`;

export const SelectButtonStyle = styled(UnstyledButtonStyle)`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  background-color: ${props =>
    props.isHighlighted ? color.brandSecondary : color.white};
  color: ${props => (props.isHighlighted ? color.white : color.greyDark)};
  font-family: ${props =>
    props.isHighlighted
      ? MakeFonts.CircularStandardBold
      : MakeFonts.CircularStandardBook};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  svg {
    fill: ${props => (props.isHighlighted ? color.white : 'inherit')};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 190px;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1px solid
      ${props => (props.isHighlighted ? color.white : color.greyLighter)};
  }
`;

export const PanelStyle = styled.div`
  display: block;
  visibility: hidden;
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 3;
  transition: all 0.25s ease-in;
  &.open {
    visibility: visible;
    bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    position: absolute;
    top: 53px;
    width: ${intToPx(Elements.DropdownsContainerWidth)};
    border-radius: ${intToPx(Elements.BorderRadius)};
    box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
    z-index: 1;
    transition: none;

    &.open {
      bottom: initial;
    }
  }
`;

export const ArrowStyle = styled.span`
  margin-left: 0;
  padding-top: 3px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 20px;
  }
`;
