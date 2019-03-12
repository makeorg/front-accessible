import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { IntToPx } from 'Shared/helpers/styled';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const IntroWrapperStyle = styled(MiddleColumnStyle)`
  background-color: ${props => props.color};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  padding: ${IntToPx(DefaultPadding.Mobile)};
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    padding: ${IntToPx(DefaultPadding.Desktop)};
  }
`;

export const IntroLabel = styled.p`
  background-color: ${BasicColors.PureBlack};
  padding: 5px;
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.RobotoCondensedBold};
  text-transform: uppercase;
  margin-bottom: 5px;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    padding: 7.5px;
    margin-bottom: 10px;
  }
`;
