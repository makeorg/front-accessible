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
  max-height: 40px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 430px;
    padding: 0 20px;
    border-radius: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-left: 40px;
  }
`;

export const SearchInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  width: 100%;
  color: ${BasicColors.PureBlack};
  font-size: 13px;
  line-height: 29px;
  &::placeholder {
    color: ${TextColors.DarkGrey};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 40px;
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
