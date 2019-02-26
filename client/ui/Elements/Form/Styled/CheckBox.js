import styled from 'styled-components';
import { IntToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { TextColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const CheckboxWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 0 18px;
`;

export const CheckboxLabelStyle = styled.label`
  display: flex;
  color: ${TextColors.MediumGrey};
  font-family: ${MakeFonts.RobotoRegular};
  font-size: 14px;
  line-height: 18px;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FakeCheckboxInputStyle = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid ${BorderColors.MediumGrey};
  margin: 2px 8px 0 0;
  z-index: 0;
`;
