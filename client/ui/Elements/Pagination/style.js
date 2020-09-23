import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SvgPreviousArrow, SvgNextArrow } from 'Client/ui/Svg/elements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const PaginationNavStyle = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const PaginationTextStyle = styled.span`
  align-self: center;
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.MediumGrey};
  padding: 0px 30px;
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

export const MobileStyle = `
  width: 10px;
  height: 17px;
`;

export const DesktopStyle = `
  width: 7px;
  height: 12px;
`;

export const PreviousArrowStyle = styled(SvgPreviousArrow)`
  ${MobileStyle}
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    ${DesktopStyle}
  }
`;

export const NextArrowStyle = styled(SvgNextArrow)`
  ${MobileStyle}
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    ${DesktopStyle}
  }
`;
