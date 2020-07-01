import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const PaginationWrapperStyle = styled.nav`
  display: flex;
  flex-direction: inline;
  justify-content: center;
  margin: 35px 0px;
`;

export const PaginationTextStyle = styled.span`
  align-self: center;
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.MediumGrey};
  padding: 0px 35px;
`;

export const PaginationButtonStyle = styled.button`
  background: none;
  border: none;
  padding: 0px;
  .tofill {
    fill: ${MakeThemeColors.Red};
  }
  &:disabled .tofill {
    fill: ${TextColors.AltMediumgrey};
  }
`;

export const DesktopStyle = {
  width: `7px`,
  height: `12px`,
};

export const MobileStyle = {
  width: `10px`,
  height: `17px`,
};
