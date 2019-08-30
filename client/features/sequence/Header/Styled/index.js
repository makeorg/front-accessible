import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  UnstyledButtonStyle,
  IconWrapperStyle,
} from 'Client/ui/Elements/ButtonElements';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const CardHeaderStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SpaceBetweenHeaderStyle = styled(CardHeaderStyle)`
  justify-content: space-between;
`;

export const FlexEndHeaderStyle = styled(CardHeaderStyle)`
  justify-content: flex-end;
`;

export const BackButtonStyle = styled(UnstyledButtonStyle)`
  align-items: center;
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const BackIconStyle = styled(IconWrapperStyle)`
  font-size: 15px;
  color: ${BackgroundColors.ExtraLightGrey};
  svg {
    fill: ${BackgroundColors.ExtraLightGrey};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 30px;
  }
`;
