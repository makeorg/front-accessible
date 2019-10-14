import styled from 'styled-components';
import {
  BorderColors,
  BackgroundColors,
  TextColors,
  BasicColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const SearchFormStyle = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 235px;
  margin-left: 10px;
  margin-right: 15px;
  padding: 0 15px;
  border-radius: 15px;
  background-color: ${BackgroundColors.LightGrey};
  border: 0.5px solid ${BorderColors.LightGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 430px;
    padding: 0 20px;
    border-radius: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-left: 40px;
  }
`;

export const SearchInputWrapperStyle = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SearchInputStyle = styled.input`
  border: none;
  padding: 0px;
  background-color: transparent;
  width: 100%;
  color: ${BasicColors.PureBlack};
  font-size: 16px;
  line-height: 29px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    line-height: 39px;
  }
`;

export const SearchLabelStyle = styled.label`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.DarkGrey};
  font-size: 16px;
  line-height: 29px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  transition: 0.25s ease opacity;
  white-space: nowrap;
  z-index: 1;
  &.hide {
    opacity: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 39px;
  }
`;

export const SearchButtonStyle = styled(UnstyledButtonStyle)`
  svg {
    width: 14px;
    .search-path {
      fill: ${MakeThemeColors.Red};
    }
  }
  &:disabled {
    .search-path {
      fill: ${TextColors.MediumGrey};
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    svg {
      width: 18px;
    }
  }
`;
