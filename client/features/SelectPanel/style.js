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

export const SelectPanelWrapperStyled = styled.div`
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

export const SelectButtonStyled = styled.button`
  background-color: ${props =>
    props.isHighlighted ? MakeThemeColors.Red : BasicColors.PureWhite};
  color: ${props =>
    props.isHighlighted ? BasicColors.PureWhite : TextColors.MediumGrey};
  font-weight: ${props => (props.isHighlighted ? 'bold' : 'normal')};
  border: none;
  padding: 14px 0;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    fill: ${props => (props.isHighlighted ? BasicColors.PureWhite : 'inherit')};
  }

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 7px 15px;
    border-radius: 20px;
    border: 1px solid
      ${props =>
        props.isHighlighted ? BasicColors.PureWhite : BorderColors.LightGrey};
  }
`;

export const PanelStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  z-index: 99;
  max-height: 40vh;

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    position: absolute;
    top: 120%;
    right: auto;
    border-radius: 8px;
    max-height: 280px;
    width: 320px;
    border-radius: ${intToPx(Elements.BorderRadius)};
    box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
    overflow: hidden;
  }
`;

export const ArrowStyle = styled.span`
  margin-left: 0;
  padding-top: 3px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 20px;
  }
`;

export const TextWrapperStyle = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: initial;
  justify-content: space-between;

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 190px;
  }
`;
