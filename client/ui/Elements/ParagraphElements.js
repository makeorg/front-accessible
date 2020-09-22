import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { color } from 'athena-design-tokens';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ParagraphStyle = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${color.greyDark};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PlayfairParagraphStyle = styled.p`
  font-family: ${MakeFonts.PlayfairDisplayRegularItalic};
  font-size: 14px;
  line-height: 18px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 20px;
  }
`;

export const CenterParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
`;
