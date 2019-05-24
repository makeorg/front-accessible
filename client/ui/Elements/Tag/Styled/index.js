import styled from 'styled-components';
import {
  BasicColors,
  TextColors,
  BackgroundColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

const DefaultTagStyle = `
  position: relative;
  padding: 0 10px 0 12px;
  color: ${TextColors.MediumGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  text-decoration: none;
  line-height: 24px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 0;
    border-color: transparent ${
      BackgroundColors.ExtraLightGrey
    } transparent transparent;
    border-style: solid;
    border-width: 12px 10px 12px 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    float: left;
    width: 6px;
    height: 6px;
    transform: translateY(-50%);
    border-radius: 3px;
    background-color: ${TextColors.MediumGrey};
  }
`;

const SelectedTagStyle = `
  background-color: ${MakeThemeColors.Red};
  color: ${BasicColors.PureWhite};
  &:before {
    border-color: transparent ${MakeThemeColors.Red} transparent transparent;
    color: ${BasicColors.PureWhite};
  }
  &:after {
    background-color: ${BasicColors.PureWhite};
  }
`;

export const TagStyle = styled.span`
  ${DefaultTagStyle};
`;

export const TagButtonStyle = styled.button`
  ${DefaultTagStyle};
  &.selected {
    ${SelectedTagStyle}
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &:hover,
    &:focus {
      ${SelectedTagStyle}
    }
  }
`;

export const TagIconStyle = styled.span`
  display: inline-flex;
  fill: ${BasicColors.PureWhite};
  font-size: 9px;
  margin-left: 5px;
`;
