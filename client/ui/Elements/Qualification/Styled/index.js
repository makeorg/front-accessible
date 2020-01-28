import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const QualifyButtonStyle = styled.button`
  font-family: ${MakeFonts.CircularStandardBold};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-width: 2px;
  font-size: 11.2px;
  line-height: 20px;
  border-style: solid;
  padding: 0 10px;
  border-radius: 36px;
  border-color: ${props => props.color};
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &.qualified {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 12.6px;
    line-height: 23px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 14px;
    line-height: 26px;
  }
`;

export const CounterStyle = styled.span`
  font-size: 14.4px;
  margin-left: 10px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16.2px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;
