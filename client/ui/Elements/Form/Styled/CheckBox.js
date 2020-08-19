import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { FlexElementStyle } from '../../FlexElements';

export const CheckboxWrapper = styled(FlexElementStyle)`
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const CheckboxLabelStyle = styled.label`
  display: inline-flex;
  color: ${color.greyDark};
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 12px;
  line-height: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FakeCheckboxInputStyle = styled.div`
  display: inline-flex;
  position: relative;
  width: 14px;
  height: 14px;
  min-width: 14px;
  border: 1px solid ${color.grey};
  margin: 2px 8px 0 0;
  z-index: 0;
  svg {
    fill: ${color.brandSecondary};
    position: absolute;
    bottom: 5%;
    left: 25%;
    z-index: 1;
    font-size: 14px;
  }
`;
