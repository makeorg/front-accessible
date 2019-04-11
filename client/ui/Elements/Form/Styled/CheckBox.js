import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  TextColors,
  BorderColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { FlexElementStyle } from '../../FlexElements';

export const CheckboxWrapper = styled(FlexElementStyle)`
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const CheckboxLabelStyle = styled.label`
  display: inline-flex;
  color: ${TextColors.MediumGrey};
  font-family: ${MakeFonts.RobotoRegular};
  font-size: 14px;
  line-height: 18px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FakeCheckboxInputStyle = styled.span`
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid ${BorderColors.MediumGrey};
  margin: 2px 8px 0 0;
  z-index: 0;
  svg {
    fill: ${MakeThemeColors.Red};
    position: absolute;
    bottom: 5%;
    left: 25%;
    z-index: 1;
    font-size: 14px;
  }
`;
